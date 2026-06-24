import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
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
	Link,
	SemiLink,
	Text,
	Title,
	TitleBox,
} from "./SignInPage.styled";

function SignInPage() {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm();

	const onSubmit = async (data) => {
		const toastId = toast.loading("Login...");

		try {
			const response = await fetch(
				"https://thecore-backend-nest.onrender.com/auth/login",
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
					render: "Login works",
					type: "success",
					isLoading: false,
					autoClose: 3000,
				});

				if (result.accessToken) {
					localStorage.setItem("token", result.accessToken);
				}

				navigate("/chat");
			} else if (response.status === 400) {
				navigate("/verify", {
					state: { from: "registration", email: data.email },
				});
			} else {
				toast.update(toastId, {
					// render: result.message || "Email or password is incorrect",
					render: "Email or password is incorrect",
					type: "error",
					isLoading: false,
					autoClose: 3000,
				});
			}
		} catch {
			toast.update(toastId, {
				render: "Server unavailable",
				type: "error",
				isLoading: false,
				autoClose: 3000,
			});
		}
	};

	const handleShowClick = () => {
		setShow(!show);
	};

	const handleBackClick = () => {
		navigate("/");
	};
	const handleForgotPasswordClick = () => {
		navigate("/forgot-password");
	};

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					{" "}
					<Title>Sign In</Title>
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

								<InputWrapper>
									<Label>Password</Label>
									<InputBox>
										<InputStyle
											$error={!!errors.password}
											$success={!errors.password && isSubmitted}
											type={show ? "text" : "password"}
											placeholder="Enter password"
											{...register("password", {
												required: "Password is required",
												minLength: {
													value: 8,
													message: "Password must be at least 8 characters",
												},
											})}
											disabled={isSubmitting}
										/>
										<IconBox onClick={handleShowClick}>
											{show ? <FiEye size={18} /> : <FiEyeOff size={18} />}
										</IconBox>
									</InputBox>
									{errors.password && (
										<ErrorMessage>
											{String(errors.password.message)}
										</ErrorMessage>
									)}
								</InputWrapper>
							</InputContent>
							<SemiLink onClick={handleForgotPasswordClick}>
								Forgot Password
							</SemiLink>
						</div>
						<Bottom>
							<ButtonBlock>
								<Button type="submit" disabled={isSubmitting}>
									Continue
								</Button>
							</ButtonBlock>

							<Text>
								Don't have an account yet?
								<Link href="/create-account">Sign up</Link>
							</Text>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default SignInPage;
