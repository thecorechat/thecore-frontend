import { useState, useState } from "react";
import { useForm, useForm } from "react-hook-form";
import { FiEye, FiEye, FiEyeOff, FiEyeOff } from "react-icons/fi";
import {
	IoIosCheckmarkCircleOutline,
	IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { useNavigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../ui/Button/Button";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import Loader from "../../ui/Loader/Loader";
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
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, isValid },
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		const toastId = toast.loading("Вхід в систему...");

		if (isValid) {
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

				console.log(response);
				if (response.ok) {
					toast.success("Логін працює", { id: toastId });

					if (result.token) {
						localStorage.setItem("token", result.token);
					}

					setTimeout(() => navigate("/chat"), 1000);
				} else if (response.status === 400) {
					navigate("/verify", {
						state: { from: "registration", email: data.email },
					});
				} else {
					toast.error(result.message || "Помилка авторизації", { id: toastId });
				}
			} catch {
				toast.error("Сервер недоступний", { id: toastId });
			} finally {
				setLoading(false);
			}
		} else {
			console.log("Form is invalid. Navigation prevented.");
		}
	};

	const handleShowClick = () => {
		setShow(!show);
	};

	const navigate = useNavigate();
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
											$error={errors.email ? true : false}
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
										<ErrorMessage>{errors.email.message}</ErrorMessage>
									)}
								</InputWrapper>

								<InputWrapper>
									<Label>Password</Label>
									<InputBox>
										<InputStyle
											$error={errors.password ? true : false}
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
										/>
										<IconBox onClick={handleShowClick}>
											{show ? <FiEye size={18} /> : <FiEyeOff size={18} />}
										</IconBox>
									</InputBox>
									{errors.password && (
										<ErrorMessage>{errors.password.message}</ErrorMessage>
									)}
								</InputWrapper>
							</InputContent>
							<SemiLink onClick={handleForgotPasswordClick}>
								Forgot Password
							</SemiLink>
						</div>
						<Bottom>
							{loading ? (
								<Loader />
							) : (
								<ButtonBlock>
									<Button
										children="Continue"
										type="submit"
										disabled={loading}
									/>
								</ButtonBlock>
							)}
							{/* <ButtonBlock>
                <Button children="Continue" type="submit" disabled={loading}>
                  {loading && 'Loading...'}
                </Button>
              </ButtonBlock> */}

							<Text>
								Don't have an account yet?
								<Link href="/create-account"> Sign up</Link>
							</Text>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default SignInPage;
