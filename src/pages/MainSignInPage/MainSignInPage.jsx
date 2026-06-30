import { useNavigate } from "react-router-dom";
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
						By continuing, you agree to the <Link>Terms of Service</Link>
						<br /> and <Link href="#">Privacy Policy</Link>.
					</Text>
				</Bottom>
			</Content>
		</Background>
	);
}

export default MainSignIn;
