import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
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
} from "./EmailPassword.styled";

function EmailPassword() {
	const [show, setShow] = useState(false);
	const [showRepeat, setShowRepeat] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, touchedFields },
		getValues,
		watch,
	} = useForm({ mode: "onBlur" });
	const { state } = useLocation();

	const emailValue = watch("email");
	const passwordValue = watch("password");
	const repeatPasswordValue = watch("repeatPassword");

	const onSubmit = async (formData) => {
		const toastId = toast.loading("Loading...");

		const fullData = {
			firstName: state.firstName,
			lastName: state.lastName,
			email: formData.email,
			password: formData.password,
		};

		try {
			const response = await fetch(
				"https://thecore-backend-nest.onrender.com/auth/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(fullData),
				},
			);

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message);
			}

			toast.update(toastId, {
				render: "Login works",
				type: "success",
				isLoading: false,
				autoClose: 3000,
			});

			navigate("/verify", {
				state: {
					email: formData.email,
					from: "registration",
				},
			});
		} catch (err) {
			toast.update(toastId, {
				render: err.message || "Server unavailable",
				type: "error",
				isLoading: false,
				autoClose: 3000,
			});
		}
	};

	const navigate = useNavigate();
	const handleBackClick = () => {
		navigate("/create-account");
	};

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					<Title>Create Account</Title>
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
											$success={
												!errors.email && !!emailValue && touchedFields.email
											}
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
											{!errors.email && !!emailValue && touchedFields.email && (
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
											$success={
												!errors.password &&
												!!passwordValue &&
												touchedFields.password
											}
											type={show ? "text" : "password"}
											placeholder="Enter password"
											{...register("password", {
												required: "Password is required",
												minLength: {
													value: 8,
													message: "Password must be at least 8 characters",
												},
												pattern: {
													value:
														/^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
													message: "Password must contain only Latin letters",
												},
											})}
										/>
										<IconBox onClick={() => setShow(!show)}>
											{show ? <FiEye size={18} /> : <FiEyeOff size={18} />}
										</IconBox>
									</InputBox>
									{errors.password && (
										<ErrorMessage>
											{String(errors.password.message)}
										</ErrorMessage>
									)}
								</InputWrapper>

								<InputWrapper>
									<Label>Repeat password</Label>
									<InputBox>
										<InputStyle
											$error={!!errors.repeatPassword}
											$success={
												!errors.repeatPassword &&
												!!repeatPasswordValue &&
												repeatPasswordValue === passwordValue &&
												touchedFields.repeatPassword
											}
											type={showRepeat ? "text" : "password"}
											placeholder="Enter password"
											{...register("repeatPassword", {
												required: "Password is required",
												minLength: {
													value: 8,
													message: "Password must be at least 8 characters",
												},
												pattern: {
													value:
														/^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
													message: "Password must contain only Latin letters",
												},
												validate: (value) =>
													value === getValues("password") ||
													"Passwords do not match",
											})}
										/>
										<IconBox onClick={() => setShowRepeat(!showRepeat)}>
											{showRepeat ? (
												<FiEye size={18} />
											) : (
												<FiEyeOff size={18} />
											)}
										</IconBox>
									</InputBox>
									{errors.repeatPassword && (
										<ErrorMessage>
											{String(errors.repeatPassword.message)}
										</ErrorMessage>
									)}
								</InputWrapper>
							</InputContent>
						</div>
						<Bottom>
							<ButtonBlock>
								<Button type="submit" disabled={isSubmitting}>
									Send password
								</Button>
							</ButtonBlock>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default EmailPassword;
