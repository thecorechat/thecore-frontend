import icon from "../../assets/icons/sprite.svg";
import { Avatar } from "../../components/Avatar/Avatar";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
import { DropdownMenuDemo } from "../DropDownMenu/DropDownMenu";
import {
	ChatHeaderContainerLeftStyle,
	ReturnArrow,
} from "./MainChatHeader.styled";

const MainChatHeader = ({ onSearchClick }) => {
	const { activeRoom, setActiveRoom } = useActiveRoom();

	return (
		<>
			<ChatHeaderContainerLeftStyle>
				<button type="button" onClick={() => setActiveRoom(null)}>
					<ReturnArrow aria-hidden="true">
						<use href={`${icon}#icon-left`}></use>
					</ReturnArrow>
				</button>
				<Avatar />
				{activeRoom ? activeRoom.name : "Select a room"}
			</ChatHeaderContainerLeftStyle>

			<DropdownMenuDemo onSearchClick={onSearchClick} />
		</>
	);
};

export default MainChatHeader;
