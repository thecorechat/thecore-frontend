// import { useState } from "react";
import { useForm } from "react-hook-form";
// import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	ErrorMessage,
	IconBox,
	InputBox,
	InputContent,
	InputStyle,
	InputWrapper,
	Label,
	Title,
	TitleBox,
} from "./CreateAccountPage.styled";

function CreateAccount() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, isValid },
	} = useForm();

	const navigate = useNavigate();
	const handleBackClick = () => {
		navigate("/");
	};

	const onSubmit = (data) => {
		console.log(data);
		if (isValid) {
			console.log("Form is valid. Navigating to /chat.");
			navigate("/create-account/email-password", {
				state: {
					firstName: data.firstname,
					lastName: data.lastname,
				},
			});
		} else {
			console.log("Form is invalid. Navigation prevented.");
		}
	};

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					<Title>Create Account</Title>
				</TitleBox>

				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<ContentForm>
						<div>
							<InputContent>
								<InputWrapper>
									<Label>First name</Label>
									<InputBox>
										<InputStyle
											$error={!!errors.firstname}
											$success={!errors.firstname && isSubmitted}
											type="text"
											placeholder="Jane"
											{...register("firstname", {
												required: "First name is required",
											})}
										/>
										<IconBox>
											{!errors.firstname && isSubmitted && (
												<IoIosCheckmarkCircleOutline
													size={24}
													color={"var(--success-70)"}
												/>
											)}
										</IconBox>
									</InputBox>
									{errors.firstname && (
										<ErrorMessage>
											{String(errors.firstname.message)}
										</ErrorMessage>
									)}
								</InputWrapper>

								<InputWrapper>
									<Label>Last name</Label>
									<InputBox>
										<InputStyle
											$error={!!errors.lastname}
											$success={!errors.lastname && isSubmitted}
											type="text"
											placeholder="Doe"
											{...register("lastname", {
												required: "Last name is required",
											})}
										/>
										<IconBox>
											{!errors.lastname && isSubmitted && (
												<IoIosCheckmarkCircleOutline
													size={24}
													color={"var(--success-70)"}
												/>
											)}
										</IconBox>
									</InputBox>
									{errors.lastname && (
										<ErrorMessage>
											{String(errors.lastname.message)}
										</ErrorMessage>
									)}
								</InputWrapper>
							</InputContent>
						</div>
						<Bottom>
							<ButtonBlock>
								<Button type="submit">Continue</Button>
							</ButtonBlock>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default CreateAccount;
