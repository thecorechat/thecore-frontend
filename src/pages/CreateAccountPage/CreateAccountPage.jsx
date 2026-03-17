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
} from "./CreateAccount.styled";

import HeaderBack from "../../ui/HeaderBack";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function CreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (isValid) {
      console.log("Form is valid. Navigating to /chat.");
      navigate("/create-account/email-password");
    } else {
      console.log("Form is invalid. Navigation prevented.");
    }
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/select-account/access-code");
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />
        <TitleBox>
          {" "}
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
                      $error={errors.firstname ? true : false}
                      $success={!errors.firstname && isSubmitted}
                      type="text"
                      placeholder="Jane"
                      //   value={email}
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
                    <ErrorMessage>{errors.firstname.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label>Last name</Label>
                  <InputBox>
                    <InputStyle
                      $error={errors.lastname ? true : false}
                      $success={!errors.lastname && isSubmitted}
                      type="text"
                      placeholder="Doe"
                      //   value={email}
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
                    <ErrorMessage>{errors.lastname.message}</ErrorMessage>
                  )}
                </InputWrapper>
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button children="Continue" type="submit" />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default CreateAccount;
