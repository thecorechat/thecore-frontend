import styled from "styled-components";

export const CreateChatContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CreateChatContent = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  /* from 768px */
  @media (min-width: 768px) {
    height: 500px;
    width: 400px;
    border-radius: 8px;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 16px;
  }
`;

export const CreateChatFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  height: 68px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InputStyle = styled.input`
  //   background-color: #f5f6fa;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: 0.2s;
  height: 48px;

  &:focus {
    border-color: #8a5cff;
    outline: none;
    background-color: #fff;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;
