import styled from "styled-components";

export const ContactsContainerStyle = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  border-right: 0.3px solid #4c4c4c;

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

export const LogoMainContactsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: #1570ef;
  gap: 0.5rem;
`;

export const LogoContactsContainerStyle = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const LogoBoxContactsContainerStyle = styled.span`
  position: relative;
  padding: 0.5rem 0.6rem;
  background-color: #eaeaeaff;
  color: #bcbcbcff;
  line-height: 90%;
  font-size: 18px;
  border-radius: 7px;
`;

export const LogoTitleContactsContainerStyle = styled.span`
  font-family: satoshi;
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

export const Circle = styled.div`
  border: 2px solid #1570ef;
  border-radius: 50%;
  position: absolute;
  right: -2px;
  bottom: -3px;
  height: 10px;
  width: 10px;
  background-color: #7ff999ff;
`;
