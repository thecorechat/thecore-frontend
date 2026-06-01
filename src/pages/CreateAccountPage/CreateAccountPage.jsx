import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import { useEffect, useState } from "react";
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
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [values, setValues] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const subscription = watch((value) => {
      setValues(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    if (isValid) {
      navigate("/create-account/email-password", {
        state: {
          firstName: data.firstName,
          lastName: data.lastName,
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
                      $error={!!errors.firstName}
                      $success={!errors.firstName && !!values.firstName}
                      type="text"
                      placeholder="Jane"
                      {...register("firstName", {
                        required: "First name is required",
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "Only Latin letters",
                        },
                      })}
                    />

                    <IconBox>
                      {!errors.firstName && !!values.firstName && (
                        <IoIosCheckmarkCircleOutline
                          size={24}
                          color={"var(--success-70)"}
                        />
                      )}
                    </IconBox>
                  </InputBox>

                  {errors.firstName && (
                    <ErrorMessage>
                      {String(errors.firstName.message)}
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Label>Last name</Label>
                  <InputBox>
                    <InputStyle
                      $error={!!errors.lastName}
                      $success={!errors.lastName && !!values.lastName}
                      type="text"
                      placeholder="Doe"
                      {...register("lastName", {
                        required: "Last name is required",
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                          message: "Only Latin letters",
                        },
                      })}
                    />

                    <IconBox>
                      {!errors.lastName && !!values.lastName && (
                        <IoIosCheckmarkCircleOutline
                          size={24}
                          color={"var(--success-70)"}
                        />
                      )}
                    </IconBox>
                  </InputBox>
                  {errors.lastName && (
                    <ErrorMessage>
                      {String(errors.lastName.message)}
                    </ErrorMessage>
                  )}
                </InputWrapper>
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button type="submit" disabled={!isValid}>
                  Continue
                </Button>
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default CreateAccount;
