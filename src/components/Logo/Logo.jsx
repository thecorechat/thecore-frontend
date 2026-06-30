import { Avatar } from "../Avatar/Avatar";
import InputSearch from "../InputSearch/InputSearch";
import {
	LogoContactsContainerStyle,
	LogoMainContactsContainerStyle,
	LogoTitleContactsContainerStyle,
} from "./Logo.styled";

export const Logo = ({ onOpenProfile }) => {
	return (
		<LogoMainContactsContainerStyle>
			<LogoContactsContainerStyle>
				<LogoTitleContactsContainerStyle>
					The Core
				</LogoTitleContactsContainerStyle>
				<Avatar onClick={onOpenProfile} />
			</LogoContactsContainerStyle>
			<InputSearch />
		</LogoMainContactsContainerStyle>
	);
};
