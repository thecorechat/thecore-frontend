import styled from "styled-components";

export const ChatContainerStyle = styled.div`
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  position: static;
  flex: 1;
  flex-direction: column;

    @media (max-width: 768px) {
    position: absolute;
    z-index: 99;
  }
`;
