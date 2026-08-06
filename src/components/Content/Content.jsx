"use client";

import { GoPlus } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

import { useSearchParams } from "react-router-dom";

import FavouriteList from "../../module/favourite/components/FavouriteList/FavouriteList";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
import { useGetDirectRooms } from "../../module/room/hooks/useGetDirectRooms";
import WorkspaceList from "../../module/workspace/components/WorkspaceList/WorkspaceList";
import { WorkspaceModalEnum } from "../../shared/constants/routes";
import Button from "../../ui/Button/Button";
import { SidebarProvider } from "../SidebarRail/SidebarProvider";
import {
	AddButtonStyle,
	AvatarImg,
	GroupItem,
	GroupItemAvatar,
	GroupList,
	SidebarWrapper,
} from "./Content.styled";

const Content = () => {
	const [, setSearchParams] = useSearchParams();
	const { data: directRooms = [], isLoading: isDirectLoading } =
		useGetDirectRooms();
	const activeRoomCtx = useActiveRoom();

	const handleOpenCreateWorkspace = () => {
		setSearchParams({ modal: WorkspaceModalEnum.SETUP }, { replace: true });
	};

	return (
		<SidebarProvider>
			<AddButtonStyle>
				<Button onClick={handleOpenCreateWorkspace} width="48px" height="48px">
					<GoPlus size={24} />
				</Button>
			</AddButtonStyle>
			<SidebarWrapper>
				<FavouriteList />
				<WorkspaceList />

				{!isDirectLoading && (
					<GroupList $open={true}>
						{/* {directRooms.length === 0 && (
							<GroupItem>
								<span>No direct messages yet</span>
							</GroupItem>
						)} */}
						{directRooms.map((room) => (
							<GroupItem key={room.roomId}>
								<a
									href={`/workspace/${room.workspaceId}/${room.roomId}`}
									onClick={(e) => {
										e.preventDefault();
										activeRoomCtx?.setActiveRoom({
											roomId: room.roomId,
											workspaceId: room.workspaceId,
											name: room.name,
											type: room.type,
											otherUserId: room.otherUserId,
											avatarUrl: room.avatarUrl,
										});
									}}
								>
									{room.avatarUrl ? (
										<GroupItemAvatar>
											<AvatarImg src={room.avatarUrl} alt="User avatar" />
										</GroupItemAvatar>
									) : (
										<GroupItemAvatar>
											<IoPersonOutline size={13} />
										</GroupItemAvatar>
									)}
									{room.name}
								</a>
							</GroupItem>
						))}
					</GroupList>
				)}
			</SidebarWrapper>
		</SidebarProvider>
	);
};

export default Content;
