import {
  Title,
  Background,
  Content,
  InputWrapper,
  InputStyle,
  Bottom,
  ButtonBlock,
  InputContent,
  ContentForm,
  TitleBox,
  Text,
  Link,
} from "./VerifyCode.styled";

import HeaderBack from "../../ui/HeaderBack";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

const CODE_LENGTH = 4;
const CORRECT_CODE = "1111";

function VerifyCode() {
  const location = useLocation();
  const sentEmail = location.state?.emailSent;
  const { handleSubmit } = useForm();
  //   const id = useId();
  const [isCodeInvalid, setIsCodeInvalid] = useState(false);
  const [isAttemptedSubmit, setIsAttemptedSubmit] = useState(false);
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const combinedCode = code.join("");

  const onSubmit = () => {
    setIsAttemptedSubmit(true);
    if (combinedCode.length !== CODE_LENGTH) {
      console.log("Code is incomplete.");
      setIsCodeInvalid(true);
      return;
    }

    if (combinedCode === CORRECT_CODE) {
      setIsCodeInvalid(false);

      console.log("Code is correct. Navigating to /");

      navigate("/change-password");
    } else {
      setIsCodeInvalid(true);
      console.log("Code is incorrect.");
    }
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/forgot-password");
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleChange = (index, e) => {
    setIsCodeInvalid(false);

    const value = e.target.value;
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);

    const nextIndex = index + 1;
    if (value && nextIndex < CODE_LENGTH) {
      inputRefs.current[nextIndex].focus();
    }
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />
        <TitleBox>
          <Title>Verify Code</Title>
          <p>
            An 4-digit code has been sent to{" "}
            <span>{sentEmail || "your email address"}</span>
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
                  {code.map((value, index) => {
                    return (
                      <InputStyle
                        key={index}
                        ref={(input) => (inputRefs.current[index] = input)}
                        $error={isAttemptedSubmit && isCodeInvalid}
                        type="tel"
                        maxLength={1}
                        placeholder="0"
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                      />
                    );
                  })}
                </InputWrapper>
                <Text>
                  Don't get a code?
                  <Link href="#"> Send again</Link>
                </Text>
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button children="Verify" type="submit" />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default VerifyCode;
