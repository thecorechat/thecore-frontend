import { useState } from 'react';
import { CreateChat } from '../CreateChat/CreateChat';
import {
  Circle,
  ContactsContainerStyle,
  LogoBoxContactsContainerStyle,
  LogoContactsContainerStyle,
  LogoMainContactsContainerStyle,
  LogoTitleContactsContainerStyle,
} from './ContactsContainer.styled';
import Content from '../../components/Content/Content';
import InputSearch from '../../components/InputSearch/InputSearch';
import { IoPersonOutline } from 'react-icons/io5';

const ContactsContainer = ({ onOpenProfile }) => {
  const [showCreateChat, setShowCreateChat] = useState(false);
  return (
    <>
      <ContactsContainerStyle>
        <Logo onOpenProfile={onOpenProfile} />

        {/* передаём функцию открытия вниз */}
        <Content onOpenCreateChat={() => setShowCreateChat(true)} />
      </ContactsContainerStyle>

      {showCreateChat && (
        <CreateChat
          onCancel={() => setShowCreateChat(false)}
          onConfirm={() => {
            // Тут можешь добавить создание чата
            setShowCreateChat(false);
          }}
        />
      )}
    </>
  );
};

export default ContactsContainer;

const Logo = ({ onOpenProfile }) => {
  return (
    <LogoMainContactsContainerStyle>
      <LogoContactsContainerStyle>
        <LogoTitleContactsContainerStyle>The Core</LogoTitleContactsContainerStyle>
        <Avatar onClick={onOpenProfile} />
      </LogoContactsContainerStyle>
      <InputSearch />
    </LogoMainContactsContainerStyle>
  );
};

export const Avatar = ({ onClick }) => {
  return (
    <LogoBoxContactsContainerStyle onClick={onClick}>
      <Circle />
      <IoPersonOutline />
    </LogoBoxContactsContainerStyle>
  );
};
