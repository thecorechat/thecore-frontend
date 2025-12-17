import {
  Title,
  Background,
  Content,
  InputWrapper,
  InputStyle,
  Label,
  Bottom,
  ButtonBlock,
  InputBox,
  IconBox,
  InputContent,
  ContentForm,
  ErrorMessage,
  TitleBox,
} from "./ChangePassword.styled";

import HeaderBack from "../../ui/HeaderBack";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

function ChangePassword() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (isValid) {
      console.log("Form is valid. Navigating to /chat.");
      navigate("/change-password/success");
    } else {
      console.log("Form is invalid. Navigation prevented.");
    }
  };

  const handleShowClick = () => {
    setShow(!show);
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/verify");
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />
        <TitleBox>
          <Title>Change password</Title>
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

                <InputWrapper>
                  <Label>Repeat password</Label>
                  <InputBox>
                    <InputStyle
                      $error={errors.repeatPassword ? true : false}
                      $success={!errors.repeatPassword && isSubmitted}
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      // value={repeatPassword}
                      {...register("repeatPassword", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        validate: (value) =>
                          value === getValues("password") ||
                          "Passwords do not match",
                      })}
                    />
                    <IconBox onClick={handleShowClick}>
                      {show ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                    </IconBox>
                  </InputBox>
                  {errors.repeatPassword && (
                    <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>
                  )}
                </InputWrapper>
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button children="Send password" type="submit" />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default ChangePassword;
