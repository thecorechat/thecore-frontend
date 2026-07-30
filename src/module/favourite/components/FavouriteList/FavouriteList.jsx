import { useMemo, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useActiveRoom } from "../../../room/context/ActiveRoomContext";
import { useGetDirectRooms } from "../../../room/hooks/useGetDirectRooms";
import { useDeleteFavourite } from "../../hooks/useDeleteFavourite";
import { useGetFavourites } from "../../hooks/useGetFavourites";
import {
	EmptyMessage,
	FavouriteConfirmBox,
	FavouriteGroup,
	FavouriteHeader,
	FavouriteItem,
	FavouriteList as FavouriteListStyled,
} from "./FavouriteList.styled";

function FavouriteList() {
	const [isOpen, setIsOpen] = useState(true);
	const [pendingDeleteId, setPendingDeleteId] = useState(null);

	const { data: favourites = [], isLoading } = useGetFavourites();
	const { data: directRooms = [] } = useGetDirectRooms();
	const { mutate: deleteFavourite, isPending: isDeleting } =
		useDeleteFavourite();
	const { setActiveRoom } = useActiveRoom();

	const directRoomById = useMemo(
		() => new Map(directRooms.map((room) => [room.roomId, room])),
		[directRooms],
	);

	if (isLoading) return null;

	const handleConfirmDelete = (/** @type {string} */ roomId) => {
		deleteFavourite(roomId, { onSuccess: () => setPendingDeleteId(null) });
	};

	return (
		<FavouriteGroup>
			<FavouriteHeader
				onClick={() => setIsOpen((prev) => !prev)}
				$open={isOpen}
			>
				<IoMdArrowDropright size={16} />
				<span>Favourites</span>
			</FavouriteHeader>
			<FavouriteListStyled $open={isOpen}>
				{favourites.length === 0 && (
					<EmptyMessage>No favourites yet</EmptyMessage>
				)}
				{favourites.map((fav) => {
					const room = fav.room ?? fav;
					const roomId = fav.roomId ?? room._id ?? fav._id;
					const workspaceId =
						room.workspaceId ?? room.workspace?.id ?? fav.workspaceId;
					const isDirect = room.type?.toUpperCase() === "DIRECT";
					const directRoom = isDirect ? directRoomById.get(roomId) : null;
					const displayName = directRoom?.name || room.name || "Room";

					return (
						<>
							<FavouriteItem key={fav._id ?? roomId}>
								<a
									href={
										workspaceId ? `/workspace/${workspaceId}/${roomId}` : "#"
									}
									onClick={(e) => {
										e.preventDefault();
										if (!workspaceId) return;
										setActiveRoom({
											roomId,
											workspaceId,
											name: displayName,
											type: room.type,
											otherUserId: directRoom?.otherUserId ?? null,
											avatarUrl: directRoom?.avatarUrl ?? null,
										});
									}}
								>
									{displayName}
								</a>
								<button
									type="button"
									disabled={isDeleting && pendingDeleteId === roomId}
									onClick={() => setPendingDeleteId(roomId)}
									title="Remove from favourites"
								>
									<MdOutlineDeleteOutline size={14} />
								</button>
							</FavouriteItem>

							{pendingDeleteId === roomId && (
								<FavouriteConfirmBox key={`confirm-${roomId}`}>
									<p>Remove &ldquo;{displayName}&rdquo; from favourites?</p>
									<div className="confirm-buttons">
										<button
											type="button"
											className="btn-yes"
											disabled={isDeleting}
											onClick={() => handleConfirmDelete(roomId)}
										>
											{isDeleting ? "Removing…" : "Yes, remove"}
										</button>
										<button
											type="button"
											className="btn-no"
											disabled={isDeleting}
											onClick={() => setPendingDeleteId(null)}
										>
											No, cancel
										</button>
									</div>
								</FavouriteConfirmBox>
							)}
						</>
					);
				})}
			</FavouriteListStyled>
		</FavouriteGroup>
	);
}

export default FavouriteList;
