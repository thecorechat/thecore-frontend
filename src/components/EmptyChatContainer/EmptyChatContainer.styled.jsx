import styled from "styled-components";

export const EmptyChatContainerStyle = styled.div`
  display: none;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  // background-color: #1570ef;

  /* from 768px */
  @media (min-width: 768px) {
    display: flex;
  }
`;
