import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../../../ui/Button/Button";
import HeaderBack from "../../../../ui/HeaderBack/HeaderBack";
import { useJoinCode } from "../../hooks/useJoinCode";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	InputBox,
	InputContent,
	InputStyle,
	InputWrapper,
	Label,
	Title,
	TitleBox,
} from "./JoinCode.styled";

function JoinCode() {
	const [, setSearchParams] = useSearchParams();
	const [code, setCode] = useState("");

	const { mutate: joinCode, isPending } = useJoinCode();

	const handleBackClick = () => {
		setSearchParams({ modal: "setup" });
	};

	function handleSubmit(e) {
		e.preventDefault();
		if (code.trim()) {
			joinCode(code.trim(), {
				onSuccess: () => {
					setSearchParams({}, { replace: true });
				},
			});
		}
	}

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					<Title>Join a Space</Title>
				</TitleBox>

				<form
					onSubmit={handleSubmit}
					noValidate
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<ContentForm>
						<InputContent>
							<InputWrapper>
								<Label>Invite code</Label>
								<InputBox>
									<InputStyle
										type="text"
										placeholder="Enter invite code"
										value={code}
										onChange={(e) => setCode(e.target.value)}
									/>
								</InputBox>
							</InputWrapper>
						</InputContent>
						<Bottom>
							<ButtonBlock>
								<Button type="submit" nonactive={!code.trim() || isPending}>
									{isPending ? "Joining..." : "Continue"}
								</Button>
							</ButtonBlock>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default JoinCode;
