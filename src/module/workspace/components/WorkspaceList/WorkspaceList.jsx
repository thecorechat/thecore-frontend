import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import { handleGetMyWorkspaces } from "../../api/handleGetMyWorkspaces";
import {
	AddChatStyle,
	Group,
	GroupHeader,
	GroupItem,
	GroupList,
	SidebarWrapper,
} from "./WorkspaceList.styled";

function WorkspaceList({ onOpenCreateChat }) {
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

	if (isLoading) return null;

	return (
		<SidebarWrapper>
			{workspaces.map((workspace) => {
				const isOpen = openGroups[workspace.id] ?? false;
				const channels = workspace.channels ?? [];
				return (
					<Group key={workspace.id}>
						<GroupHeader
							onClick={() => toggleGroup(workspace.id)}
							$open={isOpen}
						>
							<IoMdArrowDropright size={16} />
							<span>{workspace.name}</span>
						</GroupHeader>
						<GroupList $open={isOpen}>
							{channels.map((channel) => (
								<GroupItem key={channel._id}>
									<a href={`/workspace/${workspace.id}/${channel._id}`}>
										{channel.name}
									</a>
								</GroupItem>
							))}
							<AddChatStyle onClick={onOpenCreateChat}>
								<GoPlus />
								<span>Add Room</span>
							</AddChatStyle>
						</GroupList>
					</Group>
				);
			})}
		</SidebarWrapper>
	);
}

export default WorkspaceList;
