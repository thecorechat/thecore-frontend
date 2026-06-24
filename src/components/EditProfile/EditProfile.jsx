import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { Avatar } from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import {
	AddPhoto,
	AddPhotoInput,
	EditProfileBody,
	EditProfileButtonBlock,
	EditProfileIcon,
	EditProfileStyle,
	ErrorMessage,
	IconBox,
	Image,
	InputBox,
	InputStyle,
	InputWrapper,
	Label,
} from "./EditProfile.styled";
import "react-loading-skeleton/dist/skeleton.css";
import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const EditProfile = ({ isOpen, onClose }) => {
	const {
		register,
		watch,
		reset,
		formState: { errors, touchedFields, isValid, isDirty },
	} = useForm({
		mode: "onChange",
	});
	const [formData, setFormData] = useState({
		avatarUrl: "",
		firstName: "",
		lastName: "",
		email: "",
		username: "",
	});
	const hiddenFileInput = useRef(null);
	const firstNameValue = watch("firstName");
	const lastNameValue = watch("lastName");
	const userNameValue = watch("username");

	const handleGetInfo = useCallback(async () => {
		try {
			const response = await fetchWithAuth(
				"https://thecore-backend-nest.onrender.com/user/me",
			);

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message);
			}

			const data = await response.json();
			console.log(data);
			const { avatarUrl, firstName, lastName, email, username } = data;

			setFormData({ avatarUrl, firstName, lastName, email, username });
			reset({ firstName, lastName, username });
		} catch (err) {
			console.error(err.message);
		}
	}, [reset]);

	useEffect(() => {
		handleGetInfo();
	}, [handleGetInfo]);

	const handleSave = async () => {
		try {
			const response = await fetch(
				"https://thecore-backend-nest.onrender.com/user/update",
				{
					method: "PATCH",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						firstName: firstNameValue || formData.firstName,
						lastName: lastNameValue || formData.lastName,
						username: userNameValue || formData.username,
					}),
				},
			);

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleImgClick = () => {
		hiddenFileInput.current.click();
	};

	const handleImgUpload = async (evt) => {
		const formDataImg = new FormData();
		formDataImg.append("file", evt.target.files[0]);

		const response = await fetch(
			"https://thecore-backend-nest.onrender.com/user/avatar",
			{
				method: "PATCH",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: formDataImg,
			},
		);

		const data = await response.json();
		setFormData((prev) => ({ ...prev, avatarUrl: data.avatarUrl }));
	};

	return (
		<EditProfileStyle $open={isOpen}>
			<div>
				<HeaderBack onClick={onClose}>Edit profile</HeaderBack>
				{/* <form action=""> */}
				<EditProfileBody>
					<EditProfileIcon $size="120px">
						{formData ? (
							formData.avatarUrl === "" ? (
								<Avatar size="120px" iconSize="36px" />
							) : (
								<Image src={formData.avatarUrl} alt="User avatar" />
							)
						) : (
							<Skeleton width={120} height={120} />
						)}

						<AddPhoto onClick={handleImgClick}>
							<MdOutlineAddAPhoto />
							<AddPhotoInput
								type="file"
								accept="image/*"
								name="photo"
								id="photo"
								ref={hiddenFileInput}
								onChange={handleImgUpload}
							/>
						</AddPhoto>
					</EditProfileIcon>
					<div>
						<InputWrapper>
							<Label htmlFor="firstName">First name</Label>
							<InputBox>
								<InputStyle
									type="text"
									id="firstName"
									$error={!!errors.firstName}
									$success={!errors.firstName && touchedFields.firstName}
									{...register("firstName", {
										required: "First name is required",
										pattern: {
											value: /^[a-zA-Z]+$/,
											message: "Only Latin letters",
										},
									})}
								/>

								{errors.firstName && (
									<ErrorMessage>
										{String(errors.firstName.message)}
									</ErrorMessage>
								)}

								<IconBox>
									{!errors.firstName && touchedFields.firstName && (
										<IoIosCheckmarkCircleOutline
											size={24}
											color={"var(--success-70)"}
										/>
									)}
								</IconBox>
							</InputBox>
						</InputWrapper>

						<InputWrapper>
							<Label htmlFor="lastName">Last name</Label>
							<InputBox>
								<InputStyle
									type="text"
									$error={!!errors.lastName}
									$success={!errors.lastName && touchedFields.lastName}
									id="lastName"
									{...register("lastName", {
										required: "Last name is required",
										pattern: {
											value: /^[a-zA-Z]+$/,
											message: "Only Latin letters",
										},
									})}
								/>

								{errors.lastName && (
									<ErrorMessage>{String(errors.lastName.message)}</ErrorMessage>
								)}

								<IconBox>
									{!errors.lastName && touchedFields.lastName && (
										<IoIosCheckmarkCircleOutline
											size={24}
											color={"var(--success-70)"}
										/>
									)}
								</IconBox>
							</InputBox>
						</InputWrapper>

						<InputWrapper>
							<Label htmlFor="userName">User name</Label>
							<InputBox>
								<InputStyle
									type="text"
									$error={!!errors.userName}
									$success={!errors.userName && touchedFields.userName}
									id="userName"
									{...register("username", {
										required: "User name is required",
										pattern: {
											value: /^[a-zA-Z0-9_]+$/,
											message: "Only Latin letters",
										},
									})}
								/>

								{errors.userName && (
									<ErrorMessage>{String(errors.userName.message)}</ErrorMessage>
								)}

								<IconBox>
									{!errors.userName && touchedFields.userName && (
										<IoIosCheckmarkCircleOutline
											size={24}
											color={"var(--success-70)"}
										/>
									)}
								</IconBox>
							</InputBox>
						</InputWrapper>

						<InputWrapper>
							<Label>Email</Label>
							<InputStyle
								type="email"
								name="email"
								value={formData.email}
								disabled
							/>
						</InputWrapper>
					</div>
				</EditProfileBody>
			</div>

			<EditProfileButtonBlock>
				<Button
					background="transparent"
					color="var(--gray-70)"
					borderColor="var(--gray-70)"
					hoverColor="var(--gray-10)"
					onClick={onClose}
				>
					Return
				</Button>
				<Button
					background="var(--primary-60)"
					color="var(--gray-0)"
					borderColor="var(--primary-60)"
					hoverColor="var(--primary-70)"
					type="submit"
					onClick={handleSave}
					disabled={!isValid || !isDirty}
				>
					Save
				</Button>
			</EditProfileButtonBlock>
		</EditProfileStyle>
	);
};

export default EditProfile;
