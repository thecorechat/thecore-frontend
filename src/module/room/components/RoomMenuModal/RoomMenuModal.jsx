import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
	MdFavorite,
	MdFavoriteBorder,
	MdOutlineDeleteOutline,
	MdOutlinePersonAdd,
	MdOutlinePersonRemove,
} from "react-icons/md";
import { useAddFavourite } from "../../../favourite/hooks/useAddFavourite";
import { useDeleteFavourite } from "../../../favourite/hooks/useDeleteFavourite";
import { useGetFavourites } from "../../../favourite/hooks/useGetFavourites";
import { handleSearchUsers } from "../../api/handleSearchUsers";
import { useAddMember } from "../../hooks/useAddMember";
import { useDeleteRoom } from "../../hooks/useDeleteRoom";
import { useGetRoomInfo } from "../../hooks/useGetRoomInfo";
import { useRemoveMember } from "../../hooks/useRemoveMember";
import {
	ActionButton,
	AdminBadge,
	Backdrop,
	CloseButton,
	ConfirmButtons,
	ConfirmMessage,
	ConfirmSection,
	DangerButton,
	Divider,
	FavouriteButton,
	InviteBtn,
	InviteSection,
	MemberAvatar,
	// MemberCount,
	MemberListItem,
	MemberListSection,
	MemberListTitle,
	MemberName,
	Modal,
	ModalBody,
	ModalHeader,
	Overlay,
	RemoveMemberBtn,
	RoomInfo,
	RoomName,
	RoomType,
	SearchHint,
	SearchInput,
	UserItem,
	UserList,
} from "./RoomMenuModal.styled";

// Members endpoint returns: { id, memberId, member: { id, userId, user: { id, firstName, lastName, ... } } }
const resolveUser = (/** @type {any} */ raw) =>
	raw?.member?.user ?? raw?.user ?? raw;
const getUserId = (/** @type {any} */ raw) =>
	raw?.member?.user?.id ?? raw?.user?.id ?? raw?.id ?? raw?._id;
const getUserName = (/** @type {any} */ raw) => {
	const u = resolveUser(raw);
	if (u?.firstName || u?.lastName) {
		return `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
	}
	return u?.username ?? u?.name ?? u?.email ?? "Unknown user";
};

function RoomMenuModal({ room, workspaceId, onClose }) {
	const roomId = room._id ?? room.id;

	const [showInvite, setShowInvite] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [invitedIds, setInvitedIds] = useState(new Set());
	const [showConfirmDelete, setShowConfirmDelete] = useState(false);

	const { data: roomInfo } = useGetRoomInfo(workspaceId, roomId);
	// const memberCount = roomInfo?.roomMembers?.length ?? null;

	const { data: favourites = [] } = useGetFavourites();
	const { mutate: addFavourite, isPending: isAddingFav } = useAddFavourite();
	const { mutate: removeFavourite, isPending: isRemovingFav } =
		useDeleteFavourite();
	const { mutate: deleteRoom, isPending: isDeleting } =
		useDeleteRoom(workspaceId);
	const {
		mutate: inviteUser,
		isPending: isInviting,
		variables: invitingUserId,
	} = useAddMember({ workspaceId, roomId });
	const {
		mutate: removeMember,
		isPending: isRemoving,
		variables: removingMemberId,
	} = useRemoveMember({ workspaceId, roomId });

	const isFavouritePending = isAddingFav || isRemovingFav;

	const isFavourited = favourites.some((/** @type {any} */ fav) => {
		const favRoomId =
			fav.roomId ?? fav.room?._id ?? fav.room?.id ?? fav._id ?? fav.id;
		return favRoomId === roomId;
	});

	const handleToggleFavourite = () => {
		if (isFavourited) {
			removeFavourite(roomId);
		} else {
			addFavourite(roomId);
		}
	};

	const handleSearch = async (/** @type {string} */ value) => {
		setSearchQuery(value);
		if (value.trim().length < 2) {
			setSearchResults([]);
			return;
		}
		setIsSearching(true);
		try {
			const results = await handleSearchUsers(workspaceId, value.trim());
			const all = Array.isArray(results) ? results : [];
			const q = value.trim().toLowerCase();
			const filtered = all.filter((raw) => {
				const u = resolveUser(raw);
				return [u?.firstName, u?.lastName, u?.username, u?.name, u?.email]
					.filter(Boolean)
					.some((field) => field.toLowerCase().includes(q));
			});
			setSearchResults(filtered);
		} catch {
			setSearchResults([]);
		} finally {
			setIsSearching(false);
		}
	};

	const handleInvite = (/** @type {string} */ userId) => {
		inviteUser(userId, {
			onSuccess: () => setInvitedIds((prev) => new Set(prev).add(userId)),
		});
	};

	const handleConfirmDelete = () => {
		deleteRoom({ roomId }, { onSuccess: onClose });
	};

	return (
		<Overlay>
			<Backdrop onClick={onClose} />
			<Modal>
				<ModalHeader>
					<RoomInfo>
						<RoomName>{room.name}</RoomName>
						<RoomType>{room.type?.toLowerCase() ?? "chat"}</RoomType>
					</RoomInfo>
					<CloseButton onClick={onClose}>
						<IoClose size={20} />
					</CloseButton>
				</ModalHeader>

				<ModalBody>
					<FavouriteButton
						data-active={isFavourited ? "true" : "false"}
						disabled={isFavouritePending}
						onClick={handleToggleFavourite}
					>
						{isFavourited ? (
							<MdFavorite size={18} />
						) : (
							<MdFavoriteBorder size={18} />
						)}
						{isFavouritePending
							? "Saving…"
							: isFavourited
								? "Remove from Favourites"
								: "Add to Favourites"}
					</FavouriteButton>

					<Divider />

					<ActionButton onClick={() => setShowInvite((v) => !v)}>
						<MdOutlinePersonAdd size={18} />
						Invite User
					</ActionButton>

					{showInvite && (
						<InviteSection>
							<SearchInput
								placeholder="Search by first or last name…"
								value={searchQuery}
								onChange={(e) => handleSearch(e.target.value)}
								autoFocus
							/>
							{isSearching && <SearchHint>Searching…</SearchHint>}
							{!isSearching &&
								searchQuery.length >= 2 &&
								searchResults.length === 0 && (
									<SearchHint>No users found</SearchHint>
								)}
							{searchResults.length > 0 && (
								<UserList>
									{searchResults.map((raw) => {
										const userId = getUserId(raw);
										const name = getUserName(raw);
										return (
											<UserItem key={userId}>
												<span>{name}</span>
												<InviteBtn
													disabled={invitedIds.has(userId) || isInviting}
													onClick={() => handleInvite(userId)}
												>
													{invitedIds.has(userId)
														? "Invited"
														: isInviting && invitingUserId === userId
															? "Inviting…"
															: "Invite"}
												</InviteBtn>
											</UserItem>
										);
									})}
								</UserList>
							)}
							{searchQuery.length < 2 && (
								<SearchHint>Type at least 2 characters</SearchHint>
							)}
						</InviteSection>
					)}

					<Divider />

					<DangerButton onClick={() => setShowConfirmDelete(true)}>
						<MdOutlineDeleteOutline size={18} />
						Delete Room
					</DangerButton>

					{showConfirmDelete && (
						<ConfirmSection>
							<ConfirmMessage>
								Are you sure you want to delete &ldquo;{room.name}&rdquo;?
							</ConfirmMessage>
							<ConfirmButtons>
								<button
									type="button"
									className="btn-yes"
									disabled={isDeleting}
									onClick={handleConfirmDelete}
								>
									{isDeleting ? "Deleting…" : "Yes, delete"}
								</button>
								<button
									type="button"
									className="btn-no"
									disabled={isDeleting}
									onClick={() => setShowConfirmDelete(false)}
								>
									No, cancel
								</button>
							</ConfirmButtons>
						</ConfirmSection>
					)}

					{roomInfo?.roomMembers?.length > 0 && (
						<>
							<Divider />
							<MemberListSection>
								<MemberListTitle>
									Members · {roomInfo.roomMembers.length}
								</MemberListTitle>
								{roomInfo.roomMembers.map((/** @type {any} */ rm) => {
									const user = rm.member?.user;
									const isAdmin =
										rm.isCreator === true ||
										(roomInfo.creatorId &&
											rm.member?.userId === roomInfo.creatorId);
									const initials =
										[user?.firstName?.[0], user?.lastName?.[0]]
											.filter(Boolean)
											.join("") || "?";
									return (
										<MemberListItem key={rm.id}>
											<MemberAvatar>{initials}</MemberAvatar>
											<MemberName>
												{user?.firstName ?? ""} {user?.lastName ?? ""}
												{isRemoving && removingMemberId === rm.memberId && (
													<span> Removing…</span>
												)}
											</MemberName>
											{isAdmin && <AdminBadge>Admin</AdminBadge>}
											<RemoveMemberBtn
												type="button"
												title="Remove from room"
												disabled={isRemoving}
												onClick={() => removeMember(rm.memberId)}
											>
												<MdOutlinePersonRemove size={16} />
											</RemoveMemberBtn>
										</MemberListItem>
									);
								})}
							</MemberListSection>
						</>
					)}
				</ModalBody>
			</Modal>
		</Overlay>
	);
}

export default RoomMenuModal;
