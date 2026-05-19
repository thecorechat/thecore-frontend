import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 64px;
  color: var(--gray-100);
  text-align: center;

  font-family: Satoshi;
  font-size: 28px;
  font-weight: 500;
  line-height: 140%;
`;

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

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 16px 16px 56px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background-color: var(--gray-10);

  width: 100%;
  height: 100%;

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
  position: relative;
`;

export const InputStyle = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-20);
  font-size: 16px;
  transition: 0.2s;
  height: 48px;

  &:focus {
    border-color: #8a5cff;
    outline: none;
    background-color: var(--gray-0);
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
