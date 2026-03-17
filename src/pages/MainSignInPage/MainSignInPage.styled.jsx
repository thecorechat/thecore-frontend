import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 248px 16px 56px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary-60);
  // background-color: var(--gray-0);
  width: 100%;
  height: 100%;

  /* from 768px */
  @media (min-width: 768px) {
    height: 700px;
    width: 400px;
    border-radius: 15px;
  }
`;

export const Title = styled.h1`
  // margin-bottom: 330px;
  font-family: "Suisse";

  color: var(--gray-0);
  /* font-family: "Suisse Int'l Condensed Trial"; */
  font-size: 48px;

  font-weight: 600;
  line-height: 90%; /* 43.2px */
  text-align: center;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const Text = styled.p`
  color: var(--gray-0);
  text-align: center;

  /* Small Text */
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */

  color: var(--gray-0);
`;

export const Link = styled.a`
  /* Small Text */

  font-family: Satoshi;
  font-weight: 500;
  line-height: 130%;
  text-decoration-line: underline;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  gap: 8px;
`;
