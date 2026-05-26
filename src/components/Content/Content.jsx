"use client";

import { GoPlus } from "react-icons/go";

import { useSearchParams } from "react-router-dom";

import WorkspaceList from "../../module/workspace/components/WorkspaceList/WorkspaceList";
import Button from "../../ui/Button/Button";
import { SidebarProvider } from "../SidebarRail/SidebarProvider";

import { AddButtonStyle, AddChatStyle } from "./Content.styled";

const Content = ({ onOpenCreateChat }) => {
	const [, setSearchParams] = useSearchParams();

	const handleOpenCreateChat = () => {
		setSearchParams({ modal: "setup" });
	};

	return (
		<SidebarProvider>
			<AddButtonStyle>
				<Button onClick={handleOpenCreateChat} width="48px" height="48px">
					<GoPlus size={24} />
				</Button>
			</AddButtonStyle>
			<WorkspaceList onOpenCreateChat={onOpenCreateChat} />
			{/* <SidebarWrapper>
				<SidebarRail />
				{sidebar.navMain.map((group) => {
					const isOpen = openGroups[group.title] ?? true;
					return (
						<Group key={group.title}>
							<GroupHeader
								onClick={() => toggleGroup(group.title)}
								$open={isOpen}
							>
								<IoMdArrowDropright size={16} />
								<span>{group.title}</span>
							</GroupHeader>
							<GroupList $open={isOpen}>
								{group.items.map((item) => (
									<GroupItem key={item.title}>
										<a href={item.url}>{item.title}</a>
									</GroupItem>
								))}
								<AddChat onOpenCreateChat={onOpenCreateChat} />
							</GroupList>
						</Group>
					);
				})}
			</SidebarWrapper> */}
		</SidebarProvider>
	);
};

export default Content;

// const AddChat = ({ onOpenCreateChat }) => {
// 	return (
// 		<AddChatStyle onClick={onOpenCreateChat}>
// 			<GoPlus />
// 			<span>Add Chat</span>
// 		</AddChatStyle>
// 	);
// };
