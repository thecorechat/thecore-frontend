"use client";

import { useEffect, useRef, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { Avatar } from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import {
	CloseStripe,
	UserImg,
	UserProfileStyleBodyCenter,
	UserProfileStyleBodyCenterSettings,
	UserProfileStyleBodyCenterSettingsItem,
	UserProfileStyleBodyCenterSettingsItemLeft,
	UserProfileStyleBodyTop,
	UserProfileStyleBodyTopRight,
	UserProfileStyleContainer,
	UserProfileStyleContent,
} from "./UserProfile.styled";

export function UserProfile({ onCancel, onConfirm, user }) {
	void onConfirm;
	const userProfileRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

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
	console.log(user);

	const [dragY, setDragY] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const touchStartY = useRef(0);

	const handleTouchStart = (e) => {
		touchStartY.current = e.touches[0].clientY;
		setIsDragging(true);
	};

	const handleTouchMove = (e) => {
		const currentY = e.touches[0].clientY;
		const diff = currentY - touchStartY.current;
		if (diff > 0) {
			setDragY(diff);
		}
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
		if (dragY > 100) {
			onCancel();
		} else {
			setDragY(0);
		}
	};

	return (
		<UserProfileStyleContainer>
			<UserProfileStyleContent
				ref={userProfileRef}
				$isVisible={isVisible}
				$dragY={dragY}
				$isDragging={isDragging}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<CloseStripe />
				<div>
					<UserProfileStyleBodyTop>
						{user.avatarUrl ? (
							<UserImg src={user.avatarUrl} alt="User avatar" />
						) : (
							<Avatar size="64px" iconSize="32px" />
						)}

						<UserProfileStyleBodyTopRight>
							<h4>{`${user.firstName}  ${user.lastName}`}</h4>
							<p>#{user.username}</p>
						</UserProfileStyleBodyTopRight>
					</UserProfileStyleBodyTop>
				</div>

				<UserProfileStyleBodyCenter>
					<Button
						background="transparent"
						color="var(--gray-70)"
						borderColor="var(--gray-70)"
						hoverColor="var(--gray-10)"
					>
						Message
					</Button>
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
	);
}
