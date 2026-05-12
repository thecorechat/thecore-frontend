import { useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { Avatar } from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import {
	AddPhoto,
	EditProfileBody,
	EditProfileButtonBlock,
	EditProfileIcon,
	EditProfileStyle,
	InputStyle,
	InputWrapper,
	Label,
} from "./EditProfile.styled";

const EditProfile = ({ isOpen, onClose }) => {
	const [, setFirstName] = useState("");
	const [, setLastName] = useState("");
	const [, setEmail] = useState("");
	return (
		<EditProfileStyle $open={isOpen}>
			<div>
				<HeaderBack onClick={onClose}>Edit profile</HeaderBack>

				<EditProfileBody>
					<EditProfileIcon $size="120px">
						<Avatar size="120px" iconSize="36px" />
						<AddPhoto>
							<MdOutlineAddAPhoto />
						</AddPhoto>
					</EditProfileIcon>
					<div>
						<InputWrapper>
							<Label>First name</Label>
							<InputStyle
								type="text"
								placeholder="John"
								//   value={name}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</InputWrapper>

						<InputWrapper>
							<Label>Last name</Label>
							<InputStyle
								type="text"
								placeholder="Dorian"
								//   value={name}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</InputWrapper>

						<InputWrapper>
							<Label>Email</Label>
							<InputStyle
								type="email"
								placeholder="example@gmail.com"
								//   value={email}
								onChange={(e) => setEmail(e.target.value)}
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
				>
					Save
				</Button>
			</EditProfileButtonBlock>
		</EditProfileStyle>
	);
};

export default EditProfile;
