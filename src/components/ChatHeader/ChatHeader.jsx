import { useState } from "react";
import MainChatHeader from "../../components/MainChatHeader/MainChatHeader";
import SearchInputHeader from "../../components/SearchInputHeader/SearchInputHeader";
import { ChatHeaderContainerStyle } from "./ChatHeader.styled";

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
