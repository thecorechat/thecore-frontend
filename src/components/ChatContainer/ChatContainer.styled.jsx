import styled from "styled-components";

export const ChatContainerStyle = styled.div`
  // position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  // display: flex;
  display: none;
  flex-direction: column;

  /* from 768px */
  @media (min-width: 768px) {
    display: flex;
    // position: static;
    flex: 1;
  }
`;
