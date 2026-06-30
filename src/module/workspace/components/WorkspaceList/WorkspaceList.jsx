import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChatModalEnum } from "../../../../shared/constants/routes";
import RoomsGroup from "../../../room/components/RoomsGroup/RoomsGroup";
import { useGetMyWorkspaces } from "../../hooks/useGetMyWorkspaces";
import { SidebarWrapper } from "./WorkspaceList.styled";

function WorkspaceList() {
	const [, setSearchParams] = useSearchParams();
	const [openGroups, setOpenGroups] = useState({});

	const { data: workspaces = [], isLoading } = useGetMyWorkspaces();

	const toggleGroup = (id) => {
		setOpenGroups((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const handleAddRoomClick = (workspaceId) => {
		setSearchParams((prev) => {
			prev.set("modal", ChatModalEnum.SETUP);
			prev.set("workspaceId", workspaceId);
			return prev;
		});
	};

	if (isLoading) return null;

	return (
		<SidebarWrapper>
			{workspaces.map((workspace) => (
				<RoomsGroup
					key={workspace.id}
					workspace={workspace}
					isOpen={openGroups[workspace.id] ?? false}
					onToggle={() => toggleGroup(workspace.id)}
					onAddRoom={() => handleAddRoomClick(workspace.id)}
				/>
			))}
		</SidebarWrapper>
	);
}

export default WorkspaceList;
