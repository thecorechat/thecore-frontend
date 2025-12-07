"use client";

import { useEffect, useRef } from "react";
import {
  UserProfileStyleBodyCenter,
  UserProfileStyleBodyCenterSettings,
  UserProfileStyleBodyCenterSettingsItem,
  UserProfileStyleBodyCenterSettingsItemLeft,
  UserProfileStyleBodyTop,
  UserProfileStyleBodyTopRight,
  UserProfileStyleContainer,
  UserProfileStyleContent,
} from "./UserProfile.styled";
import Button from "../../../../ui/Button";
import { Avatar } from "../../../../ui/Avatar";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";

export function UserProfile({ onCancel, onConfirm }) {
  const userProfileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(e.target)
      ) {
        onCancel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onCancel]);

  return (
    <>
      <UserProfileStyleContainer>
        <UserProfileStyleContent ref={userProfileRef}>
          <div>
            <UserProfileStyleBodyTop>
              <Avatar size="64px" iconSize="32px" />
              <UserProfileStyleBodyTopRight>
                <h4>John Dorian</h4>
                <p>example@gmail.com</p>
              </UserProfileStyleBodyTopRight>
            </UserProfileStyleBodyTop>
          </div>

          <UserProfileStyleBodyCenter>
            <Button
              children="Message"
              background="transparent"
              color="var(--gray-70)"
              borderColor="var(--gray-70)"
              hoverColor="var(--gray-10)"
            />
            <UserProfileStyleBodyCenterSettings>
              <UserProfileStyleBodyCenterSettingsItem>
                <UserProfileStyleBodyCenterSettingsItemLeft>
                  <IoNotificationsOutline size={24} />
                  <p>Mute notifications</p>
                </UserProfileStyleBodyCenterSettingsItemLeft>
              </UserProfileStyleBodyCenterSettingsItem>
              <UserProfileStyleBodyCenterSettingsItem>
                <UserProfileStyleBodyCenterSettingsItemLeft>
                  <MdBlock size={24} />
                  <p>Blocked Users</p>
                </UserProfileStyleBodyCenterSettingsItemLeft>
              </UserProfileStyleBodyCenterSettingsItem>
            </UserProfileStyleBodyCenterSettings>
          </UserProfileStyleBodyCenter>
        </UserProfileStyleContent>
      </UserProfileStyleContainer>
    </>
  );
}
