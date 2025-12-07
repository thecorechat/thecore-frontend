import icon from '../../assets/icons/sprite.svg';

import {
  Container,
  BtnContainer,
  BtnLeft,
  MainContainer,
  Title,
  InputList,
  InputItem,
  Label,
  Input,
  Text,
  ButtonSend,
} from './ChangePassword.styled';

function ChangePassword() {
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
          <Title>Change password</Title>

          <form autoComplete="on">
            <InputList>
              <InputItem>
                <Label htmlFor="password">Email</Label>
                <Input id="password" type="password" name="password" autoComplete="password" placeholder="Enter password" />
              </InputItem>

              <Text>Password must be at least 8 characters.</Text>

              <InputItem>
                <Label htmlFor="repeatPassword">Repeat password</Label>
                <Input id="repeatPassword" type="password" name="repeatPassword" autoComplete="password" placeholder="Enter password" />
              </InputItem>
            </InputList>
          </form>
        </MainContainer>

        <ButtonSend>Send</ButtonSend>
      </Container>
    </>
  );
}

export default ChangePassword;
