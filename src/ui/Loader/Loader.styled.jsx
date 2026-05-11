import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    100% {
      transform: rotate(1turn);
    }
`;

export const LoaderStyle = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side, ${(props) => props.$background || "var(--primary-60)"} 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, ${(props) => props.$background || "var(--primary-60)"});
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: ${rotate} 1s infinite linear;
  align-self: center;
`;
