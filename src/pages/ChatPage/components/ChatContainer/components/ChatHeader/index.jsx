import { ChatHeaderContainerStyle } from "./ChatHeader.styled";
import MainChatHeader from "./components/MainChatHeader";
import { useState } from "react";
import SearchInputHeader from "./components/SearchInputHeader";

const ChatHeader = () => {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <ChatHeaderContainerStyle>
      {isSearching ? (
        <SearchInputHeader onBack={() => setIsSearching(false)} />
      ) : (
        <MainChatHeader onSearchClick={() => setIsSearching(true)} />
      )}
    </ChatHeaderContainerStyle>
  );
};

export default ChatHeader;
