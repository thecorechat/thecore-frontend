// import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
} from "./ForgotPasswordPage.styled";

function ForgotPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm();

	const onSubmit = async (data) => {
		const toastId = toast.loading("Code sending...");

		try {
			const response = await fetch(
				"https://thecore-backend-nest.onrender.com/auth/forgot-password",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				},
			);

			const result = await response.json();

			if (response.ok) {
				toast.update(toastId, {
					render: "Sending a code",
					type: "success",
					isLoading: false,
					autoClose: 3000,
				});

				if (result.accessToken) {
					localStorage.setItem("token", result.accessToken);
				}

				navigate("/verify", {
					state: { from: "forgot-password", email: data.email },
				});
			} else {
				toast.update(toastId, {
					render: result.message,
					type: "error",
					isLoading: false,
					autoClose: 3000,
				});
			}
		} catch {
			toast.error("Server is unavailable...", { toastId: toastId });
		}
	};

	const navigate = useNavigate();
	const handleBackClick = () => {
		navigate("/signin");
	};

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					<Title>Forgot password?</Title>
					<p>Enter your registered email address</p>
				</TitleBox>

				<ToastContainer />

				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<ContentForm>
						<div>
							<InputContent>
								<InputWrapper>
									<Label>Email</Label>
									<InputBox>
										<InputStyle
											$error={!!errors.email}
											$success={!errors.email && isSubmitted}
											type="email"
											placeholder="example@gmail.com"
											{...register("email", {
												required: "Email is required",
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: "Invalid email address",
												},
											})}
											disabled={isSubmitting}
										/>
										<IconBox>
											{!errors.email && isSubmitted && (
												<IoIosCheckmarkCircleOutline
													size={24}
													color={"var(--success-70)"}
												/>
											)}
										</IconBox>
									</InputBox>
									{errors.email && (
										<ErrorMessage>{String(errors.email.message)}</ErrorMessage>
									)}
								</InputWrapper>
							</InputContent>
						</div>

						<Bottom>
							<ButtonBlock>
								<Button type="submit" disabled={isSubmitting}>
									Send
								</Button>
							</ButtonBlock>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default ForgotPassword;
