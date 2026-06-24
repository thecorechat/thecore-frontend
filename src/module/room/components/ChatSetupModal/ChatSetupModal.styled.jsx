import styled from "styled-components";

export const TitleBox = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    color: var(--gray-70);
    text-align: center;
    line-height: 130%;
  }
`;

export const Title = styled.h2`
  margin-top: 64px;
  color: var(--gray-100);
  text-align: center;

  font-family: Satoshi;
  font-size: 28px;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
position: relative;
  padding: 16px 16px 56px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background-color: var(--gray-10);

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

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  flex: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: var(--gray-100);
  margin-bottom: 0.25rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  // margin-bottom: 1rem;
  position: relative;
`;

export const IconBox = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-40%);
  cursor: pointer;
  color: var(--gray-50);
  transition: 0.5s;
  &:hover {
    color: var(--gray-70);
    transition: 0.5s;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  gap: 8px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Link = styled.a`
  font-family: Satoshi;
  font-weight: 500;
  line-height: 130%;
  text-decoration-line: underline;
  color: var(--primary-60);

  margin-left: 5px;
`;

export const SemiLink = styled.a`
  display: flex;
  justify-content: end;
  /* Small Text */

  font-family: Satoshi;
  font-weight: 500;
  line-height: 130%;
  text-decoration-line: underline;
  color: var(--primary-60);
`;

export const Text = styled.p`
  color: var(--gray-100);
  text-align: center;

  /* Small Text */
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const ErrorMessage = styled.span`
  color: var(--system-error);
  font-size: 14px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Image = styled.img`
  height: 29px;
  width: auto;
  margin-right: 8px;
`;
