import {
  Title,
  Background,
  Content,
  Bottom,
  ButtonBlock,
  ContentForm,
  TitleBox,
} from "./SuccessMessage.styled";

import HeaderBack from "../../../../ui/HeaderBack";
import { useNavigate } from "react-router-dom";
import Button from "../../../../ui/Button";

function SuccessMessage() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/change-password");
  };

  const handleSignInClick = () => {
    navigate("/signin");
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />
        <TitleBox>
          <Title>Password successfully changed</Title>
          <p>You can use your new password to login to your account</p>
        </TitleBox>

        <ContentForm>
          <div></div>
          <Bottom>
            <ButtonBlock>
              <Button
                children="Continue"
                type="submit"
                onClick={handleSignInClick}
              />
            </ButtonBlock>
          </Bottom>
        </ContentForm>
      </Content>
    </Background>
  );
}

export default SuccessMessage;
