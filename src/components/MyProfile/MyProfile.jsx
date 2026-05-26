import { useEffect, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
  ProfileImg,
} from "./MyProfile.styled";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MyProfile = ({ onOpenEditProfile, isOpen, onClose }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

  const handleLogOutClick = async () => {
    const toastId = toast.loading("Logging out...");
    setIsLoading(true);

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


      toast.update(toastId, {
        render: "Successfully logged out",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      localStorage.removeItem("token");
      navigate("/");
    } catch (err) {
      toast.update(toastId, {
        render: err.message || "Error logout",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
    } catch (err) {
      console.error(err.message);
    }
  }
  
  useEffect(() => {
    handleGetInfo();
  }, []);
// 			const data = await response.json();
// 			setUserInfo(data);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		handleGetInfo();
// 	}, [handleGetInfo]);

	console.log(userInfo);
	return (
		<MyProfileStyle $open={isOpen}>
			<div>
				{/* <ToastContainer /> */}

        <HeaderBack onClick={onClose}>My profile</HeaderBack>
        <MyProfileStyleBodyTop>
          {userInfo ? (
            <>
              {userInfo.avatarUrl ? (
                <ProfileImg
                  src={userInfo?.avatarUrl}
                  alt="Profile image"
                  width="64px"
                />
              ) : (
                <Avatar size="64px" iconSize="32px" />
              )}

              <MyProfileStyleBodyTopRight>
                <h4>
                  {userInfo?.firstName} {userInfo?.lastName}
                </h4>
                <p>{userInfo?.email}</p>
              </MyProfileStyleBodyTopRight>
            </>
          ) : (
            <>
              <Skeleton width={64} height={64} />

              <MyProfileStyleBodyTopRight>
                <Skeleton width={120} height={16} />
                <Skeleton width={180} height={14} />
              </MyProfileStyleBodyTopRight>
            </>
          )}
        </MyProfileStyleBodyTop>
        <MyProfileStyleBodyCenter>
          <Button
            background="transparent"
            color="var(--gray-70)"
            borderColor="var(--gray-70)"
            hoverColor="var(--gray-10)"
            onClick={onOpenEditProfile}
          >
            Edit profile
          </Button>
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
      <MyProfileStyleBottom onClick={handleLogOutClick} disabled={isLoading}>
        <LuLogOut /> Logout
      </MyProfileStyleBottom>
    </MyProfileStyle>
  );
};

export default MyProfile;
