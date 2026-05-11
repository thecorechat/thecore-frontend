import { IoNotificationsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import ToggleSwitch from "../../ui/ToggleSwitch/ToggleSwitch";
import {
	MyProfileStyle,
	MyProfileStyleBodyCenter,
	MyProfileStyleBodyCenterSettings,
	MyProfileStyleBodyCenterSettingsItem,
	MyProfileStyleBodyCenterSettingsItemLeft,
	MyProfileStyleBodyTop,
	MyProfileStyleBodyTopRight,
	MyProfileStyleBottom,
} from "./MyProfile.styled";

const MyProfile = ({ onOpenEditProfile, isOpen, onClose }) => {
	const navigate = useNavigate();
	const handleLogOutClick = async () => {
		try {
			const response = await fetch(
				"https://thecore-backend-nest.onrender.com/auth/logout",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				},
			);

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message);
			}

			localStorage.removeItem("token");
			navigate("/");
		} catch (err) {
			console.error("Помилка:", err.message);
		}
	};
	return (
		<MyProfileStyle $open={isOpen}>
			<div>
				<HeaderBack children="My profile" onClick={onClose} />
				<MyProfileStyleBodyTop>
					<Avatar size="64px" iconSize="32px" />
					<MyProfileStyleBodyTopRight>
						<h4>John Dorian</h4>
						<p>example@gmail.com</p>
					</MyProfileStyleBodyTopRight>
				</MyProfileStyleBodyTop>
				<MyProfileStyleBodyCenter>
					<Button
						children="Edit profile"
						background="transparent"
						color="var(--gray-70)"
						borderColor="var(--gray-70)"
						hoverColor="var(--gray-10)"
						onClick={onOpenEditProfile}
					/>
					<MyProfileStyleBodyCenterSettings>
						<MyProfileStyleBodyCenterSettingsItem>
							<MyProfileStyleBodyCenterSettingsItemLeft>
								<IoNotificationsOutline size={24} />
								<p>Notifications</p>
							</MyProfileStyleBodyCenterSettingsItemLeft>
							<ToggleSwitch />
						</MyProfileStyleBodyCenterSettingsItem>
						<MyProfileStyleBodyCenterSettingsItem>
							<MyProfileStyleBodyCenterSettingsItemLeft>
								<MdBlock size={24} />
								<p>Blocked Users</p>
							</MyProfileStyleBodyCenterSettingsItemLeft>
						</MyProfileStyleBodyCenterSettingsItem>
					</MyProfileStyleBodyCenterSettings>
				</MyProfileStyleBodyCenter>
			</div>

			<MyProfileStyleBottom onClick={handleLogOutClick}>
				<LuLogOut /> Logout
			</MyProfileStyleBottom>
		</MyProfileStyle>
	);
};

export default MyProfile;
