import styled from 'styled-components';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//       body {
// background-color: #1570ef;
//       }
//     `;

export const Background = styled.div`
  padding-top: 200px;

  /* background-color: #1570ef; */
  /* width: 100%;
  height: 100%; */
`;

export const Title = styled.h1`
  margin-bottom: 330px;

  color: #ffffff;
  /* font-family: "Suisse Int'l Condensed Trial"; */
  font-size: 48px;

  font-weight: 600;
  line-height: 90%; /* 43.2px */
  text-align: center;
`;

export const ButtonList = styled.ul`
  /* display: flex;
  justify-content: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-bottom: 48px;
`;

export const Button = styled.button`
  display: block;
  width: 340px;
  height: 44px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  text-align: center;

  border-radius: 8px;
  background: #ffffff;

  color: #1570ef;

  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Text = styled.p`
  color: #ffffff;
  text-align: center;

  /* Small Text */
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */

  color: #ffffff;
`;

export const Link = styled.a`
  /* Small Text */

  font-family: Satoshi;
  font-weight: 500;
  line-height: 130%;
  text-decoration-line: underline;
`;
