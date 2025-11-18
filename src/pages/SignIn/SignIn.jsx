import {
  BtnContainer,
  BtnLeft,
  MainContainer,
  Title,
  InputList,
  InputItem,
  Label,
  Input,
  ForgotLink,
  BtnContinue,
  TextContainer,
  AdditionalText,
  SignUpLink,
} from './SignIn.styled';
import icon from '../../assets/icons/sprite.svg';

function SignIn() {
  return (
    <>
      <BtnContainer>
        <button>
          <BtnLeft>
            <use href={`${icon}#icon-left`}></use>
          </BtnLeft>
        </button>
      </BtnContainer>

      <MainContainer>
        <Title>Sign In</Title>

        <form autoComplete="on">
          <InputList>
            <InputItem>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" autoComplete="current-email" placeholder="example@gmail.com" />
            </InputItem>

            <InputItem>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" autoComplete="current-password" placeholder="Enter password" />
            </InputItem>
          </InputList>
        </form>

        <ForgotLink href="#">Forgot password?</ForgotLink>
      </MainContainer>

      <BtnContinue>Continue</BtnContinue>

      <TextContainer>
        <AdditionalText>Don't have an account yet?</AdditionalText>

        <SignUpLink href="#">Sign up</SignUpLink>
      </TextContainer>
    </>
  );
}

export default SignIn;
