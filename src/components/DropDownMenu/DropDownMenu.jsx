"use client";

import { useEffect, useRef, useState } from "react";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
// import { GoMute, GoUnmute } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import icon from "../../assets/icons/sprite.svg";
import { useAddFavourite } from "../../module/favourite/hooks/useAddFavourite";
import { useDeleteFavourite } from "../../module/favourite/hooks/useDeleteFavourite";
import { useGetFavourites } from "../../module/favourite/hooks/useGetFavourites";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
import { useDeleteRoom } from "../../module/room/hooks/useDeleteRoom";
import { DeleteDialog } from "../DeleteDialog/DeleteDialog";
import {
	Dots,
	Group,
	Item,
	// Label,
	Menu,
	MenuButton,
	Wrapper,
} from "./DropDownMenu.styled";

/**
 * @param {{ onSearchClick?: (event?: any) => void }} props
 */

export const DropdownMenuDemo = ({ onSearchClick }) => {
	const [open, setOpen] = useState(false);
	// const [isMuted, setIsMuted] = useState(false);
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);
	const ref = useRef(null);

	const { activeRoom, setActiveRoom } = useActiveRoom();

	const { data: favourites = [] } = useGetFavourites();

	const { mutate: addFavourite, isPending: isAddingFav } = useAddFavourite();
	const { mutate: removeFavourite, isPending: isRemovingFav } =
		useDeleteFavourite();
	const { mutate: deleteRoom, isPending: isDeleting } = useDeleteRoom(
		activeRoom?.workspaceId,
	);

	const isFavouritePending = isAddingFav || isRemovingFav;

	const isFavourited = favourites.some((/** @type {any} */ fav) => {
		const favRoomId =
			fav.roomId ?? fav.room?._id ?? fav.room?.id ?? fav._id ?? fav.id;
		return favRoomId === activeRoom?.roomId;
	});

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleToggleFavourite = () => {
		if (!activeRoom) return;
		if (isFavourited) {
			removeFavourite(activeRoom.roomId);
		} else {
			addFavourite(activeRoom.roomId);
		}
	};

	// const handleToggleMute = () => {
	// 	setIsMuted((prev) => !prev);
	// 	setOpen(false);
	// };

	const handleDeleteChat = () => {
		setShowDeleteDialog(true);
		setOpen(false);
	};

	const handleConfirmDelete = () => {
		if (!activeRoom) return;
		deleteRoom(
			{ roomId: activeRoom.roomId },
			{
				onSuccess: () => {
					setShowDeleteDialog(false);
					setActiveRoom(null);
				},
			},
		);
	};

	return (
		<>
			<Wrapper ref={ref}>
				<MenuButton onClick={() => setOpen((o) => !o)}>
					<Dots aria-hidden="true" width={24} height={24}>
						<use href={`${icon}#icon-dots`}></use>
					</Dots>
					{/* <BsThreeDotsVertical /> */}
				</MenuButton>
				{open && (
					<Menu>
						<Group>
							{/* <Item onClick={handleToggleMute}>
								{isMuted ? <GoMute /> : <GoUnmute />}
								{isMuted ? "Unmute notifications" : "Mute notifications"}
							</Item> */}
							<Item onClick={onSearchClick}>
								<IoMdSearch />
								Search
							</Item>
							<Item
								disabled={isFavouritePending}
								onClick={handleToggleFavourite}
							>
								{isFavourited ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
								{isFavouritePending
									? "Saving…"
									: isFavourited
										? "Remove from favorites"
										: "Add to favorite chats"}
							</Item>
							<Item onClick={handleDeleteChat}>
								<FiTrash />
								Delete chat
							</Item>
						</Group>
					</Menu>
				)}
			</Wrapper>

			{showDeleteDialog && (
				<DeleteDialog
					roomName={activeRoom?.name}
					isPending={isDeleting}
					onCancel={() => setShowDeleteDialog(false)}
					onConfirm={handleConfirmDelete}
				/>
			)}
		</>
	);
};
