import { useState } from "react";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import ContactsContainer from "../../components/ContactsContainer/ContactsContainer";
import EditProfile from "../../components/EditProfile/EditProfile";
import EmptyChatContainer from "../../components/EmptyChatContainer/EmptyChatContainer";
import MyProfile from "../../components/MyProfile/MyProfile";
import {
	ActiveRoomProvider,
	useActiveRoom,
} from "../../module/room/context/ActiveRoomContext";
import { ChatMainContainerStyle } from "./ChatPage.styled";

const ChatArea = () => {
	const { activeRoom } = useActiveRoom();
	return activeRoom ? <ChatContainer /> : <EmptyChatContainer />;
};

const Chat = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
	return (
		<ActiveRoomProvider>
			<ChatMainContainerStyle>
				<ContactsContainer onOpenProfile={() => setIsProfileOpen(true)} />
				<ChatArea />
				<MyProfile
					isOpen={isProfileOpen}
					onClose={() => setIsProfileOpen(false)}
					onOpenEditProfile={() => setIsEditProfileOpen(true)}
				/>
				<EditProfile
					isOpen={isEditProfileOpen}
					onClose={() => setIsEditProfileOpen(false)}
				/>
			</ChatMainContainerStyle>
		</ActiveRoomProvider>
	);
};

export default Chat;
