import { useState } from "react";
import Content from "../../components/Content/Content";
import { CreateChat } from "../CreateChat/CreateChat";
import { ContactsContainerStyle } from "./ContactsContainer.styled";
import { Logo } from "../Logo/Logo";

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
