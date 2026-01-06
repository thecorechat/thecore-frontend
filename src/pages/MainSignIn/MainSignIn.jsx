import {
  Background,
  Title,
  Text,
  Link,
  ButtonBlock,
  Content,
  Bottom,
} from "./MainSignIn.styled";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
function MainSignIn() {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/signin");
  };
  const handleCreateAccountClick = () => {
    navigate("/select-account");
  };
  return (
    <Background>
      <Content>
        <Title>The Core</Title>

        <Bottom>
          <ButtonBlock>
            <Button
              children="Create account"
              background="white"
              color="var(--primary-60)"
              borderColor="var(--gray-70)"
              hoverColor="var(--gray-10)"
              onClick={handleCreateAccountClick}
            />
            <Button
              children="Sign in"
              background="white"
              color="var(--primary-60)"
              borderColor="var(--gray-70)"
              hoverColor="var(--gray-10)"
              onClick={handleSignInClick}
            />
          </ButtonBlock>

          <Text>
            By continuing, you agree to the{" "}
            <Link href="#">Terms of Service</Link>
            <br /> and{" "}
            <Link href="#">Privacy Policy</Link>.
          </Text>
        </Bottom>
      </Content>
    </Background>
  );
}

export default MainSignIn;
