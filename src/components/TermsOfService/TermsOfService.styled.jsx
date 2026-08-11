import styled from "styled-components";

export const TermsOfServiceContainer = styled.div`
  width: 100%;
  position: absolute;
  padding: 0 16px;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--gray-0);

  z-index: 100;
  transition: transform 0.3s ease;
  border-right: 1px solid  var(--gray-20);
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
`;

export const TermsTitle = styled.h2`
  margin-bottom: 16px;
`;

export const TermsTextItem = styled.li`
  margin-bottom: 16px;
`;