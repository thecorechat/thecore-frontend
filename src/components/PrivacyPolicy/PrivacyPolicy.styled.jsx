import styled from "styled-components";

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  position: absolute;
  padding: 0 16px;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--gray-0);
  width: 100%;
  transition: transform 0.3s ease;
  /* border-right: 0.3px solid #4c4c4c; */
  border-right: 1px solid  var(--gray-20);
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};

  /* from 768px */
  @media (min-width: 768px) {
    width: 35vw;
  }

  /* from 1024px */
  @media (min-width: 1024px) {
    width: 30vw;
  }

  /* from 1280px */
  @media (min-width: 1280px) {
    width: 20vw;
  }
`;
