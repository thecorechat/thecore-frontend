import { useState } from 'react';
import { ChatMainContainerStyle } from './ChatPage.styled';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import ContactsContainer from '../../components/ContactsContainer/ContactsContainer';
// import EmptyChatContainer from '../../components/EmptyChatContainer/EmptyChatContainer';
import MyProfile from '../../components/MyProfile/MyProfile';
import EditProfile from '../../components/EditProfile/EditProfile';

const Chat = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  return (
    <>
      <ChatMainContainerStyle>
        <ContactsContainer onOpenProfile={() => setIsProfileOpen(true)} />
        {/* <EmptyChatContainer /> */}
        <ChatContainer />
        <MyProfile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} onOpenEditProfile={() => setIsEditProfileOpen(true)} />
        <EditProfile isOpen={isEditProfileOpen} onClose={() => setIsEditProfileOpen(false)} />
      </ChatMainContainerStyle>
    </>
  );
};

export default Chat;
