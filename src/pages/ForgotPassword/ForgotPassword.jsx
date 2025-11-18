import icon from '../../assets/icons/sprite.svg';

import { Container, BtnContainer, BtnLeft, MainContainer, Title, Text, Label, Input, ButtonSend } from './ForgotPassword.styled';

function ForgotPassword() {
  return (
    <>
      <Container>
        <BtnContainer>
          <button>
            <BtnLeft>
              <use href={`${icon}#icon-left`}></use>
            </BtnLeft>
          </button>
        </BtnContainer>

        <MainContainer>
          <Title>Forgot password?</Title>

          <Text>Enter your registered email address.</Text>

          <form action="">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" autoComplete="current-email" placeholder="example@gmail.com" />
          </form>
        </MainContainer>

        <ButtonSend>Send</ButtonSend>
      </Container>
    </>
  );
}

export default ForgotPassword;
