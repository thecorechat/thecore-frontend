import { useState } from "react";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import ContactsContainer from "../../components/ContactsContainer/ContactsContainer";
import EditProfile from "../../components/EditProfile/EditProfile";
// import EmptyChatContainer from '../../components/EmptyChatContainer/EmptyChatContainer';
import MyProfile from "../../components/MyProfile/MyProfile";
import { ChatMainContainerStyle } from "./ChatPage.styled";

const Chat = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
	return (
		<>
			<ChatMainContainerStyle>
				<ContactsContainer onOpenProfile={() => setIsProfileOpen(true)} />
				{/* <EmptyChatContainer /> */}
				<ChatContainer />
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
		</>
	);
};

export default Chat;
