import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WorkspaceModalEnum } from "../../../../shared/constants/routes";
import Button from "../../../../ui/Button/Button";
import HeaderBack from "../../../../ui/HeaderBack/HeaderBack";
import { useCreateWorkspace } from "../../hooks/useCreateWorkspace";
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
} from "./CreateWorkspaceModal.styled";

function CreateWorkspace() {
	const [, setSearchParams] = useSearchParams();
	const [name, setName] = useState("");

	const { mutate: createWorkspace, isPending } = useCreateWorkspace();

	const handleBackClick = () => {
		setSearchParams({ modal: WorkspaceModalEnum.SETUP }, { replace: true });
	};

	function handleSubmit(e) {
		e.preventDefault();
		if (name.trim()) {
			createWorkspace(name.trim(), {
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
					<Title>Create Space</Title>
				</TitleBox>

				<form
					onSubmit={handleSubmit}
					noValidate
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<ContentForm>
						<InputContent>
							<InputWrapper>
								<Label>Space name</Label>
								<InputBox>
									<InputStyle
										type="text"
										placeholder="Enter space name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</InputBox>
							</InputWrapper>
						</InputContent>
						<Bottom>
							<ButtonBlock>
								<Button type="submit" nonactive={!name.trim() || isPending}>
									{isPending ? "Creating..." : "Continue"}
								</Button>
							</ButtonBlock>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default CreateWorkspace;
