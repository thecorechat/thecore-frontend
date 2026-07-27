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

	if (!activeRoom) {
		return (
			<>
				<ChatHeaderContainerLeftStyle>
					Select a room
				</ChatHeaderContainerLeftStyle>
				<DropdownMenuDemo onSearchClick={onSearchClick} />
			</>
		);
	}

	return (
		<>
			<ChatHeaderContainerLeftStyle>
				<button type="button" onClick={() => setActiveRoom(null)}>
					<ReturnArrow aria-hidden="true">
						<use href={`${icon}#icon-left`}></use>
					</ReturnArrow>
				</button>
				<Avatar userId={activeRoom.id} />
				{activeRoom ? activeRoom.name : "Select a room"}
			</ChatHeaderContainerLeftStyle>

			<DropdownMenuDemo onSearchClick={onSearchClick} />
		</>
	);
};

export default MainChatHeader;
