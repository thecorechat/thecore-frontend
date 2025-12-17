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
} from "./ForgotPassword.styled";

import HeaderBack from "../../ui/HeaderBack";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    console.log(data);
    if (isValid) {
      console.log("Form is valid. Attempting to send reset email for:", email);

      try {
        navigate("/verify", { state: { emailSent: email } });
      } catch (error) {
        console.error("Error sending reset email:", error);
      }
    } else {
      console.log("Form is invalid. Navigation prevented.");
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
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button children="Send" type="submit" />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default ForgotPassword;
