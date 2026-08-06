// import { IoPersonOutline } from "react-icons/io5";
import icon from "../../assets/icons/sprite.svg";
// import { Avatar } from "../../components/Avatar/Avatar";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
import { Avatar } from "../Avatar/Avatar";
import { DropdownMenuDemo } from "../DropDownMenu/DropDownMenu";
import {
	ChatHeaderContainerLeftStyle,
	// Circle,
	// LogoBoxContactsContainerStyle,
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

	// Пытаемся найти через roomMembers, если бэкенд их передает

	// Запасной вариант: если у вас в комнате приходит recipientId, userId или другие поля
	const targetUserId = activeRoom.otherUserId;

	// console.log("Resolved targetUserId for Avatar:", targetUserId);
	// console.log("activeRoom.roomMembers:", activeRoom);

	return (
		<>
			<ChatHeaderContainerLeftStyle>
				<button type="button" onClick={() => setActiveRoom(null)}>
					<ReturnArrow aria-hidden="true">
						<use href={`${icon}#icon-left`}></use>
					</ReturnArrow>
				</button>

				{/* <LogoBoxContactsContainerStyle>
 					<Circle />
					<IoPersonOutline size={20} />
 				</LogoBoxContactsContainerStyle> */}

				<Avatar userId={targetUserId} avatarUrl={activeRoom.avatarUrl} />

				{activeRoom ? activeRoom.name : "Select a room"}
			</ChatHeaderContainerLeftStyle>

			<DropdownMenuDemo onSearchClick={onSearchClick} />
		</>
	);
};

export default MainChatHeader;
