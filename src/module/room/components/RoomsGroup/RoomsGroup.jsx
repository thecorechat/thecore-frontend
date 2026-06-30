import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { useDeleteWorkspace } from "../../../workspace/hooks/useDeleteWorkspace";
import { handleGetRoomInfo } from "../../api/handleGetRoomInfo";
import { useActiveRoom } from "../../context/ActiveRoomContext";
import { useGetRooms } from "../../hooks/useGetRooms";
import RoomMenuModal from "../RoomMenuModal/RoomMenuModal";
import {
	AddChatStyle,
	DotsButton,
	Group,
	GroupHeader,
	GroupHeaderToggle,
	GroupItem,
	GroupList,
	RoomRow,
	TrashButton,
	WorkspaceConfirmBox,
} from "./RoomsGroup.styled";

function RoomsGroup({ workspace, isOpen, onToggle, onAddRoom }) {
	const { data: rooms = [] } = useGetRooms(workspace.id);
	const [activeRoom, setActiveRoom] = useState(null);
	const queryClient = useQueryClient();
	const { setActiveRoom: setGlobalRoom } = useActiveRoom();

	const handlePrefetchRoomInfo = (roomId) => {
		queryClient.prefetchQuery({
			queryKey: ["roomInfo", workspace.id, roomId],
			queryFn: () => handleGetRoomInfo(workspace.id, roomId),
			staleTime: 5 * 60 * 1000,
		});
	};
	const [showConfirm, setShowConfirm] = useState(false);

	const { mutate: deleteWorkspace, isPending: isDeleting } =
		useDeleteWorkspace();

	const handleConfirmDelete = () => {
		deleteWorkspace(workspace.id, {
			onSuccess: () => setShowConfirm(false),
		});
	};

	return (
		<>
			<Group>
				<GroupHeader $open={isOpen}>
					<GroupHeaderToggle $open={isOpen} onClick={onToggle}>
						<IoMdArrowDropright size={16} />
						<span>{workspace.name}</span>
					</GroupHeaderToggle>
					<TrashButton
						className="trash-btn"
						type="button"
						title="Delete workspace"
						disabled={isDeleting}
						onClick={(e) => {
							e.stopPropagation();
							setShowConfirm((v) => !v);
						}}
					>
						<MdOutlineDeleteOutline size={15} />
					</TrashButton>
				</GroupHeader>

				{showConfirm && (
					<WorkspaceConfirmBox>
						<p>Delete &ldquo;{workspace.name}&rdquo;?</p>
						<p className="warning">
							All rooms in this workspace will also be deleted.
						</p>
						<div className="confirm-buttons">
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
								onClick={() => setShowConfirm(false)}
							>
								No, cancel
							</button>
						</div>
					</WorkspaceConfirmBox>
				)}

				<GroupList $open={isOpen}>
					{rooms.map((room) => (
						<GroupItem key={room._id}>
							<RoomRow>
								<a
									href={`/workspace/${workspace.id}/${room._id}`}
									onClick={(e) => {
										e.preventDefault();
										setGlobalRoom({
											roomId: room._id ?? room.id,
											workspaceId: workspace.id,
											name: room.name,
											type: room.type,
										});
									}}
								>
									{room.name}
								</a>
								<DotsButton
									onMouseEnter={() => handlePrefetchRoomInfo(room._id)}
									onClick={(e) => {
										e.preventDefault();
										setActiveRoom(room);
									}}
									title="Room options"
								>
									<SlOptions size={12} />
								</DotsButton>
							</RoomRow>
						</GroupItem>
					))}
					<AddChatStyle onClick={onAddRoom}>
						<GoPlus />
						<span>Add Chat</span>
					</AddChatStyle>
				</GroupList>
			</Group>

			{activeRoom && (
				<RoomMenuModal
					room={activeRoom}
					workspaceId={workspace.id}
					onClose={() => setActiveRoom(null)}
				/>
			)}
		</>
	);
}

export default RoomsGroup;
