import { Avatar } from '../../components/ContactsContainer/ContactsContainer';
import { DropdownMenuDemo } from '../DropDownMenu/DropDownMenu';
import { ChatHeaderContainerLeftStyle } from './MainChatHeader.styled';

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
