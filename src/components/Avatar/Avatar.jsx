import { useState } from "react";
// import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
// import { fetchWithAuth } from "../../utils/fetchWithAuth";
import {
	Circle,
	LogoBoxContactsContainerStyle,
	ProfileImg,
	ProfileImgContainerStyle,
} from "./Avatar.styled";

export const Avatar = ({ onClick = () => {} }) => {
	const [userInfo] = useState(null);
	// const [userInfo, setUserInfo] = useState(null);

	// async function handleGetInfo() {
	// 	try {
	// 		const response = await fetchWithAuth(
	// 			"https://thecore-backend-nest.onrender.com/user/me",
	// 		);

	// 		if (!response.ok) {
	// 			const error = await response.json();
	// 			throw new Error(error.message);
	// 		}

	// 		const data = await response.json();
	// 		setUserInfo(data);
	// 		// console.log(data);
	// 	} catch (error) {
	// 		console.error(error.message);
	// 	}
	// }

	// useEffect(() => {
	// 	handleGetInfo();
	// }, []);

	return userInfo ? (
		<ProfileImgContainerStyle onClick={onClick}>
			<Circle />
			<ProfileImg src={userInfo?.avatarUrl} alt="Profile image" />
		</ProfileImgContainerStyle>
	) : (
		<LogoBoxContactsContainerStyle onClick={onClick}>
			<Circle />
			<IoPersonOutline size={20} />
		</LogoBoxContactsContainerStyle>
	);
};
