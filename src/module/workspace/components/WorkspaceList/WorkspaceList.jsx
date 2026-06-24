import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChatModalEnum } from "../../../../shared/constants/routes";
import RoomsGroup from "../../../room/components/RoomsGroup/RoomsGroup";
import { handleGetMyWorkspaces } from "../../api/handleGetMyWorkspaces";
import { SidebarWrapper } from "./WorkspaceList.styled";

function WorkspaceList() {
	const [, setSearchParams] = useSearchParams();
	const [openGroups, setOpenGroups] = useState({});

	const { data: workspaces = [], isLoading } = useQuery({
		queryKey: ["workspaces"],
		queryFn: handleGetMyWorkspaces,
	});

	const toggleGroup = (id) => {
		setOpenGroups((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const handleAddRoomClick = (workspaceId) => {
		setSearchParams((prev) => {
			prev.set("modal", ChatModalEnum.MAIN_SETUP);
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
