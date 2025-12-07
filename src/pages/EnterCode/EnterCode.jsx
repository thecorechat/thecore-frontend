import icon from '../../assets/icons/sprite.svg';

import {
  Container,
  BtnContainer,
  BtnLeft,
  MainContainer,
  Title,
  Text,
  InputList,
  InputNumber,
  BoldText,
  HelpText,
  Link,
  ButtonSend,
} from './EnterCode.styled';

function EnterCode() {
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
          <Title>Enter code</Title>

          <Text>
            An 6-digit code has been sent to <BoldText>example@gmail.com</BoldText>
          </Text>
          <form action="">
            <InputList>
              <li>
                <InputNumber type="number" id="number" value="0" min="0" max="9" step="1" />
              </li>
              <li>
                <InputNumber type="number" id="number" value="0" min="0" max="9" step="1" />
              </li>
              <li>
                <InputNumber type="number" id="number" value="0" min="0" max="9" step="1" />
              </li>
              <li>
                <InputNumber type="number" id="number" value="0" min="0" max="9" step="1" />
              </li>
            </InputList>
          </form>
        </MainContainer>

        <HelpText>
          Didn’t get a code? <Link>Send again</Link>
        </HelpText>

        <ButtonSend>Send</ButtonSend>
      </Container>
    </>
  );
}

export default EnterCode;
