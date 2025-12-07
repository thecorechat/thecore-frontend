import { useState } from "react";
import { ChatContainerStyle } from "./ChatContainer.styled";
import ChatHeader from "./components/ChatHeader";
import MessageBar from "./components/MessageBar";
import MessageContainer from "./components/MessageContainer";
import { UserProfile } from "../UserProfile";

const ChatContainer = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);
  return (
    <>
      <ChatContainerStyle>
        <ChatHeader />
        <MessageContainer onOpenUserProfile={() => setShowUserProfile(true)} />
        <MessageBar />
      </ChatContainerStyle>

      {showUserProfile && (
        <UserProfile
          onCancel={() => setShowUserProfile(false)}
          onConfirm={() => {
            // Тут можешь добавить создание чата
            setShowUserProfile(false);
          }}
        />
      )}
    </>
  );
};

export default ChatContainer;
