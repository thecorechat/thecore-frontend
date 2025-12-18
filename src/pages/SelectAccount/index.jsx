import {
  Title,
  Background,
  Content,
  Bottom,
  ButtonBlock,
  ContentForm,
  TitleBox,
  SelectBox,
} from "./SelectAccountType.styled";

import HeaderBack from "../../ui/HeaderBack";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import Radio, { RadioGroup } from "./components/RadioSelect";
import { useState } from "react";

function SelectAccountType() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();
  const [accountType, setAccountType] = useState("");
  const onSubmit = () => {
    if (!accountType) return;

    navigate("/select-account/access-code", {
      state: { accountType },
    });
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />
        <TitleBox>
          <Title>Select Account Type</Title>
        </TitleBox>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <ContentForm>
            <SelectBox>
              <RadioGroup
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <Radio value="student">Student</Radio>
                <Radio value="teacher">Teacher</Radio>
                <Radio value="parent">Parent</Radio>
              </RadioGroup>
            </SelectBox>

            <Bottom>
              <ButtonBlock>
                <Button
                  children="Continue"
                  type="submit"
                  nonactive={!accountType}
                />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default SelectAccountType;
