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
  InputContent,
  ContentForm,
  ErrorMessage,
  TitleBox,
} from "./AccessCode.styled";

import HeaderBack from "../../../../ui/HeaderBack";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../ui/Button";
import { useForm } from "react-hook-form";

function AccessCode() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();
  const location = useLocation();
  const account = location.state?.accountType;

  const accountRequirements = {
    parent: {
      patternValue: /apple/i,
      errorMessage: "It's not currect access code for Parent accout",
    },
    student: {
      patternValue: /ananas/i,
      errorMessage: "It's not currect access code for Student accout",
    },
    teacher: {
      patternValue: /kiwi/i,
      errorMessage: "It's not currect access code for Teacher accout",
    },
  };

  const currentReq = accountRequirements[account];

  const onSubmit = (data) => {
    const email = data.email;

    console.log(data);
    navigate("/create-account");
    // if (isValid) {
    //   console.log("Form is valid. Attempting to send reset email for:", email);

    //   try {
    //     navigate("/create-account", { state: { emailSent: email } });
    //   } catch (error) {
    //     console.error("Error sending reset email:", error);
    //   }
    // } else {
    //   console.log("Form is invalid. Navigation prevented.");
    // }
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/select-account");
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />
        <TitleBox>
          <Title>Enter Access Code</Title>
          <p>
            Use the code provided by your school administration to join the
            platform
          </p>
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
                  <Label>Code</Label>
                  <InputBox>
                    <InputStyle
                      $error={errors.code ? true : false}
                      $success={!errors.code && isSubmitted}
                      type="text"
                      placeholder="Enter access code"
                      //   value={email}
                      {...register("code", {
                        required: "Code is required",
                        pattern: {
                          value: currentReq?.patternValue,

                          message: currentReq?.errorMessage,
                        },
                      })}
                    />
                  </InputBox>
                  {errors.code && (
                    <ErrorMessage>{errors.code.message}</ErrorMessage>
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

export default AccessCode;
