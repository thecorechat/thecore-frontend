import { ChatContainerStyle } from "./ChatContainer.styled";
import ChatHeader from "./components/ChatHeader";
import MessageBar from "./components/MessageBar";
import MessageContainer from "./components/MessageContainer";

const ChatContainer = () => {
  return (
    <ChatContainerStyle>
      <ChatHeader />
      <MessageContainer />
      <MessageBar />
    </ChatContainerStyle>
  );
};

export default ChatContainer;
