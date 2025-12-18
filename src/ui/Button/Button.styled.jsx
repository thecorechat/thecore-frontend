import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  line-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.$background || "var(--primary-60)"};
  color: ${(props) => props.$color || "var(--gray-0)"};
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "44px"};
  border: 1px solid ${(props) => props.$borderColor || "var(--primary-60)"};
  &:hover {
    background-color: ${(props) => props.$hoverColor || "var(--primary-70)"};
  }

  &:disabled {
    background-color: var(--primary-20);
    cursor: not-allowed;
    opacity: 0.7;
    border: none;
    color: var(--gray-0);
  }
`;
