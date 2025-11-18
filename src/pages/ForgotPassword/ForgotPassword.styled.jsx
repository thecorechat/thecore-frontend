import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 54px;
`;

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

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  color: #686970;

  font-family: Satoshi;
  font-size: 16px;
  font-weight: 500;

  border-radius: 8px;
  border: 1px solid #dbdbe2;
  background: #fff;
`;

export const ButtonSend = styled.button`
  /* position: absolute;
  bottom: 54px; */
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
