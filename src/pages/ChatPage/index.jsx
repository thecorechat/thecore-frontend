import { ChatMainContainerStyle } from "./Chat.styled";
import ChatContainer from "./components/ChatContainer";
import ContactsContainer from "./components/ContactsContainer";
import EmptyChatContainer from "./components/EmptyChatContainer";

const Chat = () => {
  return (
    <ChatMainContainerStyle>
      <ContactsContainer />
      {/* <EmptyChatContainer /> */}
      <ChatContainer />
    </ChatMainContainerStyle>
  );
};

export default Chat;
