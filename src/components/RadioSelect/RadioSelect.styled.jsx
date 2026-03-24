import styled from "styled-components";

export const Select = styled.label`
  padding: 16px;
  width: 100%;
  background: ${(props) =>
    props.$isActive ? "var(--primary-10)" : "var(--gray-0)"};
  display: flex;
  height: 61px;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  border: 1px solid
    ${(props) => (props.$isActive ? "var(--primary-60)" : "var(--gray-20)")};
`;

export const Input = styled.input`
  display: none;
`;
