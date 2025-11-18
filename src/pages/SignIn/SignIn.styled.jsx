import styled from 'styled-components';

export const BtnContainer = styled.div`
  padding: 16px;
`;

export const BtnLeft = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #000000;
`;

export const MainContainer = styled.div`
  padding-top: 64px;
  margin-bottom: 268px;
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;

  font-family: Satoshi;
  font-size: 28px;
  font-weight: 500;
  line-height: 140%; /* 39.2px */

  margin-bottom: 40px;
`;

export const InputList = styled.ul`
  margin-bottom: 8px;
`;

export const InputItem = styled.li`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;

  color: var(--Gray-100, #18181a);

  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  padding: 8px 16px;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;

  color: var(--Gray-70, #686970);
  border-radius: 8px;
  border: 1px solid var(--Gray-20, #dbdbe2);
  background: var(--Gray-0, #fff);
`;

export const ForgotLink = styled.a`
  display: flex;
  justify-content: end;

  color: #1570ef;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
`;

export const BtnContinue = styled.button`
  width: 100%;
  margin-bottom: 16px;
  height: 44px;
  padding: 10px;

  border-radius: 8px;
  background: #1570ef;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 700;

  color: #fff;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const AdditionalText = styled.p`
  color: #18181a;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
`;

export const SignUpLink = styled.a`
  color: #1570ef;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
`;
