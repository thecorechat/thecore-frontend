import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "../../components/TermsOfService/TermsOfService";
import Button from "../../ui/Button/Button";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	Link,
	Text,
	Title,
} from "./MainSignInPage.styled";

function MainSignIn() {
	const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
	const [isTermsOpen, setIsTermsOpen] = useState(false);

	const navigate = useNavigate();
	const handleSignInClick = () => {
		navigate("/signin");
	};
	const handleCreateAccountClick = () => {
		navigate("/create-account");
	};
	return (
		<Background>
			<Content>
				<Title>The Core</Title>

				<Bottom>
					<ButtonBlock>
						<Button
							background="white"
							color="var(--primary-60)"
							borderColor="var(--gray-70)"
							hoverColor="var(--gray-10)"
							onClick={handleCreateAccountClick}
						>
							Create account
						</Button>
						<Button
							background="white"
							color="var(--primary-60)"
							borderColor="var(--gray-70)"
							hoverColor="var(--gray-10)"
							onClick={handleSignInClick}
						>
							Sign in
						</Button>
					</ButtonBlock>

					<Text>
						By continuing, you agree to the{" "}
						<Link onClick={() => setIsTermsOpen(true)}>Terms of Service</Link>
						<br /> and{" "}
						<Link onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</Link>.
					</Text>
				</Bottom>

				<PrivacyPolicy
					isOpen={isPrivacyOpen}
					onClose={() => setIsPrivacyOpen(false)}
				/>
				<TermsOfService
					isOpen={isTermsOpen}
					onClose={() => setIsTermsOpen(false)}
				/>
			</Content>
		</Background>
	);
}

export default MainSignIn;
