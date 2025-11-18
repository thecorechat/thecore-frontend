import { Background, Title, ButtonList, Button, Text, Link } from './MainSignIn.styled';

function MainSignIn() {
  return (
    <Background>
      <Title>The Core</Title>

      <ButtonList>
        <li>
          <Button>Create account</Button>
        </li>
        <li>
          <Button>Sign in</Button>
        </li>
      </ButtonList>

      <Text>
        By continuing, you agree to the
        <Link href="#"> Terms of Service</Link> <br /> and
        <Link href="#"> Privacy Policy</Link>.
      </Text>
    </Background>
  );
}

export default MainSignIn;
