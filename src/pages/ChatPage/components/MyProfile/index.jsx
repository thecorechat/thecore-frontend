import {
  MyProfileStyleBodyCenter,
  MyProfileStyleBodyTop,
  MyProfileStyleBodyTopRight,
  MyProfileStyleBottom,
  MyProfileStyle,
  MyProfileStyleBodyCenterSettings,
  MyProfileStyleBodyCenterSettingsItem,
  MyProfileStyleBodyCenterSettingsItemLeft,
} from "./MyProfile.styled";
import { LuLogOut } from "react-icons/lu";
import Button from "../../../../ui/Button";
import { Avatar } from "../../../../ui/Avatar";
import HeaderBack from "../../../../ui/HeaderBack";
import { MdBlock } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import ToggleSwitch from "../../../../ui/ToggleSwitch";

const MyProfile = ({ onOpenEditProfile, isOpen, onClose }) => {
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

      <MyProfileStyleBottom>
        <LuLogOut /> Logout
      </MyProfileStyleBottom>
    </MyProfileStyle>
  );
};

export default MyProfile;
