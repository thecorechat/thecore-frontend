import { useState } from "react";
import { ChatMainContainerStyle } from "./Chat.styled";
import ChatContainer from "./components/ChatContainer";
import ContactsContainer from "./components/ContactsContainer";
import EmptyChatContainer from "./components/EmptyChatContainer";
import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";

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
