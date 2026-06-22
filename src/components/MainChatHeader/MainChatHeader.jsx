import icon from "../../assets/icons/sprite.svg";
import { Avatar } from "../../components/Avatar/Avatar";
import { DropdownMenuDemo } from "../DropDownMenu/DropDownMenu";
import {
	ChatHeaderContainerLeftStyle,
	ReturnArrow,
} from "./MainChatHeader.styled";

const MainChatHeader = ({ onSearchClick }) => {
	return (
		<>
			<ChatHeaderContainerLeftStyle>
				<button type="button">
					<ReturnArrow aria-hidden="true">
						<use href={`${icon}#icon-left`}></use>
					</ReturnArrow>
				</button>
				<Avatar />
				John Dorian
			</ChatHeaderContainerLeftStyle>

			<DropdownMenuDemo onSearchClick={onSearchClick} />
		</>
	);
};

export default MainChatHeader;
