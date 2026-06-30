import Content from "../../components/Content/Content";
import { Logo } from "../Logo/Logo";
import { ContactsContainerStyle } from "./ContactsContainer.styled";

const ContactsContainer = ({ onOpenProfile }) => {
	return (
		<ContactsContainerStyle>
			<Logo onOpenProfile={onOpenProfile} />
			<Content />
		</ContactsContainerStyle>
	);
};

export default ContactsContainer;
