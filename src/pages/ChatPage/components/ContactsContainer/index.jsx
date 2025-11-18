import {
  Circle,
  ContactsContainerStyle,
  LogoBoxContactsContainerStyle,
  LogoContactsContainerStyle,
  LogoMainContactsContainerStyle,
  LogoTitleContactsContainerStyle,
} from "./ContactsContainer.styled";
import Content from "./components/Content";
import InputSearch from "./components/InputSearch";
import { IoPersonOutline } from "react-icons/io5";

const ContactsContainer = () => {
  return (
    <ContactsContainerStyle>
      <Logo />
      <Content />
    </ContactsContainerStyle>
  );
};

export default ContactsContainer;

const Logo = () => {
  return (
    <LogoMainContactsContainerStyle>
      <LogoContactsContainerStyle>
        <LogoTitleContactsContainerStyle>
          The Core
        </LogoTitleContactsContainerStyle>
        <Avatar />
      </LogoContactsContainerStyle>
      <InputSearch />
    </LogoMainContactsContainerStyle>
  );
};

export const Avatar = () => {
  return (
    <>
      <LogoBoxContactsContainerStyle>
        <Circle />
        <IoPersonOutline />
      </LogoBoxContactsContainerStyle>
    </>
  );
};
