import {
  Title,
  Background,
  Content,
  InputWrapper,
  InputStyle,
  Label,
  Bottom,
  ButtonBlock,
  Link,
  Text,
  SemiLink,
  InputBox,
  IconBox,
  InputContent,
  ContentForm,
  ErrorMessage,
  TitleBox,
} from "./SignIn.styled";

import HeaderBack from "../../ui/HeaderBack";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function SignIn() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (isValid) {
      console.log("Form is valid. Navigating to /chat.");
      navigate("/chat");
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
                      //   value={email}
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
                      //   value={password}
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
              <ButtonBlock>
                <Button children="Continue" type="submit" />
              </ButtonBlock>

              <Text>
                Don't have an account yet?
                <Link href="#"> Sign up</Link>
              </Text>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default SignIn;
