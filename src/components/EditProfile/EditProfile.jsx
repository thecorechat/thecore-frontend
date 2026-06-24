import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
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
	Image,
	InputStyle,
	InputWrapper,
	Label,
} from "./EditProfile.styled";

const EditProfile = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		avatarUrl: "",
		firstName: "",
		lastName: "",
		email: "",
	});
	const hiddenFileInput = useRef(null);
	const [, setImg] = useState(null);

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
			const { avatarUrl, firstName, lastName, email } = data;

			// console.log(data);
			setFormData({ avatarUrl, firstName, lastName, email });
		} catch (err) {
			console.error(err.message);
		}
	}, []);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	useEffect(() => {
		handleGetInfo();
	}, [handleGetInfo]);
	// console.log(img);

	const handleImgClick = () => {
		hiddenFileInput.current.click();
	};

	const handleImgUpload = async (evt) => {
		if (evt.target.files.length > 0) {
			setImg({
				src: URL.createObjectURL(evt.target.files[0]),
			});
		}

		const formDataImg = new FormData();
		formDataImg.append("file", evt.target.files[0]);

		// const response = await fetch(
		// 	"https://thecore-backend-nest.onrender.com/user/avatar",
		// 	{
		// 		method: "PATCH",
		// 		headers: {
		// 			Authorization: `Bearer ${localStorage.getItem("token")}`,
		// 		},
		// 		body: formDataImg,
		// 	},
		// );

		// const data = await response.json();
		// console.log(data);
	};
	//   const response = await fetch(
	//     "https://thecore-backend-nest.onrender.com/user/avatar",
	//     {
	//       method: "PATCH",
	//       headers: {
	//         "Content-Type": "application/json",
	//         Authorization: `Bearer ${localStorage.getItem("token")}`,
	//       },
	//     },
	//   );
	//   console.log(response);
	// }

	// console.log(formData.avatarUrl)

	return (
		<EditProfileStyle $open={isOpen}>
			<div>
				<HeaderBack onClick={onClose}>Edit profile</HeaderBack>

				<EditProfileBody>
					<EditProfileIcon $size="120px">
						{formData.avatarUrl === "" ? (
							<Avatar size="120px" iconSize="36px" />
						) : (
							<Image src={formData.avatarUrl} alt="User avatar" />
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
							<InputStyle
								type="text"
								name="firstName"
								id="firstName"
								value={formData.firstName}
								onChange={handleChange}
							/>
						</InputWrapper>

						<InputWrapper>
							<Label htmlFor="lastName">Last name</Label>
							<InputStyle
								type="text"
								name="lastName"
								id="lastName"
								value={formData.lastName}
								onChange={handleChange}
							/>
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
				>
					Save
				</Button>
			</EditProfileButtonBlock>
		</EditProfileStyle>
	);
};

export default EditProfile;
