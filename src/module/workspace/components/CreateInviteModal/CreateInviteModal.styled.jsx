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
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    color: var(--gray-70);
    text-align: center;
    line-height: 130%;
    font-size: 14px;
  }
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
  padding: 16px 16px 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-10);
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    height: auto; 
    min-height: 650px;
    max-height: 90vh; 
    width: 440px;   
    border-radius: 15px;
    overflow-y: auto; 
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RadioCardSelected = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #8a5cff;
  background-color: var(--gray-0, #f3efff);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-100);
  transition: all 0.2s ease;

  span {
    font-size: 24px;
  }
`;

export const RadioCardUnselected = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid var(--gray-20);
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray-100);
  transition: all 0.2s ease;

  span {
    font-size: 24px;
  }

  &:hover {
    border-color: #8a5cff;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  flex: 1;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
