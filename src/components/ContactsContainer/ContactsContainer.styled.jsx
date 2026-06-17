import styled from "styled-components";

export const ContactsContainerStyle = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  /* border-right: 0.3px solid #4c4c4c; */
    border-right: 1px solid  var(--gray-20);

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
