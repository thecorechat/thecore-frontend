import { IoPersonOutline } from "react-icons/io5";
import { IconProfile } from "./Avatar.styled";

export const Avatar = ({ size, iconSize }) => {
  return (
    <IconProfile $size={size}>
      <IoPersonOutline size={iconSize} />
    </IconProfile>
  );
};
