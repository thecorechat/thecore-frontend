import { useState } from "react";
import Content from "../../components/Content/Content";
import { CreateChat } from "../CreateChat/CreateChat";
import { Logo } from "../Logo/Logo";
import { ContactsContainerStyle } from "./ContactsContainer.styled";

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
