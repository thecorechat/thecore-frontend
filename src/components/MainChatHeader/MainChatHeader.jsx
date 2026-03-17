import { Avatar } from "../../../../../ContactsContainer";
import { DropdownMenuDemo } from "../DropDownMenu";
import { ChatHeaderContainerLeftStyle } from "./MainChatHeader.styled";

const MainChatHeader = ({ onSearchClick }) => {
  return (
    <>
      <ChatHeaderContainerLeftStyle>
        <Avatar />
        John Dorian
      </ChatHeaderContainerLeftStyle>

      <DropdownMenuDemo onSearchClick={onSearchClick} />
    </>
  );
};

export default MainChatHeader;
