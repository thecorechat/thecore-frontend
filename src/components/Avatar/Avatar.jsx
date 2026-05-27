import { IoPersonOutline } from "react-icons/io5";
import {
  Circle,
  LogoBoxContactsContainerStyle,
  ProfileImg,
  ProfileImgContainerStyle,
} from "./Avatar.styled";
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../../utils/fetchWithAuth";

export const Avatar = ({ onClick = () => {} }) => {
  const [userInfo, setUserInfo] = useState(null);

  async function handleGetInfo() {
    try {
      const response = await fetchWithAuth(
        "https://thecore-backend-nest.onrender.com/user/me",
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      setUserInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    handleGetInfo();
  }, []);

  return userInfo ? (
    <ProfileImgContainerStyle onClick={onClick}>
      <Circle />
      <ProfileImg src={userInfo?.avatarUrl} alt="Profile image" width="32px" />
    </ProfileImgContainerStyle>
  ) : (
    <LogoBoxContactsContainerStyle onClick={onClick}>
      <Circle />
      <IoPersonOutline />
    </LogoBoxContactsContainerStyle>
  );
};
