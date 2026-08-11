import styled from "styled-components";

export const PrivacyContainer = styled.div`
  position: absolute;
  padding: 0 16px;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--gray-0);
  width: 100%;
  transition: transform 0.3s ease;
  z-index: 100;

  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
`;

export const PrivacyTitle = styled.h2`
  margin-bottom: 16px;
`;

export const PrivacyTextItem = styled.li`
  margin-bottom: 16px;
`;
