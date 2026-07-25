import { useGetCurrentUser } from "../../module/user/hooks/useGetCurrentUser";
import { Avatar } from "../Avatar/Avatar";
import InputSearch from "../InputSearch/InputSearch";
import {
	LogoContactsContainerStyle,
	LogoMainContactsContainerStyle,
	LogoTitleContactsContainerStyle,
} from "./Logo.styled";

export const Logo = ({ onOpenProfile }) => {
	const { data: currentUser } = useGetCurrentUser();
	return (
		<LogoMainContactsContainerStyle>
			<LogoContactsContainerStyle>
				<LogoTitleContactsContainerStyle>
					The Core
				</LogoTitleContactsContainerStyle>
				<Avatar onClick={onOpenProfile} userId={currentUser?.id} />
			</LogoContactsContainerStyle>
			<InputSearch />
		</LogoMainContactsContainerStyle>
	);
};
