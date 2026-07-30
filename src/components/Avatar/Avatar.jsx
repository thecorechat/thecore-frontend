import { IoPersonOutline } from "react-icons/io5";
import { usePresence } from "../../shared/context/usePresence";
import {
	Circle,
	LogoBoxContactsContainerStyle,
	ProfileImg,
	ProfileImgContainerStyle,
} from "./Avatar.styled";

/**
 * @param {{ userId?: string | null, avatarUrl?: string | null, size?: string, iconSize?: string, onClick?: () => void }} props
 */

export const Avatar = ({
	userId = null,
	avatarUrl = null,
	size,
	iconSize = "20px",
	onClick = () => {},
}) => {
	const { isUserOnline } = usePresence();
	const isOnline = userId ? isUserOnline(userId) : false;

	const circleColor = isOnline ? "#7ff999" : "#98a2b3";

	return avatarUrl ? (
		<ProfileImgContainerStyle
			onClick={onClick}
			style={{ width: size, height: size }}
		>
			<Circle style={{ backgroundColor: circleColor }} />
			<ProfileImg src={avatarUrl} alt="User avatar" />
		</ProfileImgContainerStyle>
	) : (
		<LogoBoxContactsContainerStyle
			onClick={onClick}
			style={{ width: size, height: size }}
		>
			<Circle style={{ backgroundColor: circleColor }} />
			<IoPersonOutline size={iconSize} />
		</LogoBoxContactsContainerStyle>
	);
};
