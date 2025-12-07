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
  margin-bottom: 40px;

  color: #18181a;
  text-align: center;

  font-family: Satoshi;
  font-size: 28px;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
`;

export const Text = styled.p`
  margin-bottom: 24px;
  color: #686970;

  font-family: Satoshi;
  font-size: 14px;
  font-weight: 500;
`;

export const InputList = styled.ul`
  margin-bottom: 8px;
`;

export const InputItem = styled.li`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: 8px;
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
