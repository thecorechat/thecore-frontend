import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 54px;
`;

export const BtnContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const BtnLeft = styled.svg`
  width: 24px;
  height: 24px;

  stroke: #000000;
`;

export const MainContainer = styled.div`
  padding-top: 64px;
`;

export const Title = styled.h2`
  margin-bottom: 8px;

  color: #18181a;
  text-align: center;

  font-family: Satoshi;
  font-size: 28px;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
`;

export const Text = styled.p`
  margin-bottom: 40px;
  color: #686970;
  text-align: center;

  font-family: Satoshi;
  font-size: 18px;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
`;

export const InputList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;

  margin-bottom: 16px;
`;

export const InputNumber = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--Gray-20, #dbdbe2);

  background: var(--White, #fff);
  box-shadow: 0 1px 2px 0 rgba(10, 13, 18, 0.05);

  color: var(--Gray-20, #dbdbe2);
  text-align: center;
  font-family: Satoshi;
  font-size: 40px;
  font-weight: 700;
  line-height: 140%; /* 56px */
`;

export const BoldText = styled.span`
  color: #686970;

  font-family: Satoshi;
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;
`;

export const HelpText = styled.p`
  color: #18181a;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled.a`
  color: #1570ef;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
`;

export const ButtonSend = styled.button`
  margin-top: auto;
  margin-bottom: 0;
  width: 100%;
  height: 44px;
  padding: 10px;

  border-radius: 8px;
  background: var(--Primary-60, #1570ef);

  color: #fff;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 700;
`;
