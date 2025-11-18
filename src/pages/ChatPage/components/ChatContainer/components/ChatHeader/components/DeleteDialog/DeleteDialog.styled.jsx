import styled from "styled-components";

export const DeleteDialogContainer = styled.div`
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

export const DeleteDialogContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 360px;

  h2 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 16px;
  }
`;

export const DeleteDialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const ButtonCancel = styled.button`
  padding: 0.5rem;
  font-size: 16px;
`;

export const ButtonDelete = styled.button`
  padding: 0.5rem;
  font-size: 16px;
  color: #ff3b30;
`;
