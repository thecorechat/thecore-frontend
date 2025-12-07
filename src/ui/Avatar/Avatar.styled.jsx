import styled from "styled-components";

export const IconProfile = styled.div`
  display: flex;
  background: var(--gray-10);
  color: var(--gray-40);
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  width: ${(props) => props.$size || "30px"};
  height: ${(props) => props.$size || "30px"};
  position: relative;
`;
