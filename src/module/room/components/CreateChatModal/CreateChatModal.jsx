import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChatModalEnum } from "../../../../shared/constants/routes";
import Button from "../../../../ui/Button/Button";
import HeaderBack from "../../../../ui/HeaderBack/HeaderBack";
import { useCreateRoom } from "../../hooks/useCreateRoom";
import {
	Background,
	Content,
	Footer,
	InputBox,
	InputStyle,
	InputWrapper,
	Label,
} from "./CreateChatModal.styled";

function CreateChatModal() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [name, setName] = useState("");
	const roomType = searchParams.get("type");
	const workspaceId = searchParams.get("workspaceId");

	const { mutate: createRoom, isPending } = useCreateRoom(workspaceId);

	const handleBackClick = () => {
		setSearchParams((prev) => {
			prev.set("modal", ChatModalEnum.SETUP);
			prev.delete("type");
			return prev;
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		if (name.trim()) {
			createRoom(
				{ name: name.trim(), type: roomType },
				{
					onSuccess: () => {
						setSearchParams({}, { replace: true });
					},
				},
			);
		}
	}

	console.log("Create Chat", workspaceId);

	return (
		<Background>
			<Content>
				<div>
					<HeaderBack onClick={handleBackClick}>Create {roomType}</HeaderBack>
					<InputWrapper>
						<Label>Name</Label>
						<InputBox>
							<InputStyle
								type="text"
								placeholder={"# Name your " + roomType}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</InputBox>
					</InputWrapper>
				</div>

				<Footer>
					<Button
						type="submit"
						nonactive={!name.trim() || isPending}
						onClick={handleSubmit}
					>
						{isPending ? "Creating..." : "Create"}
					</Button>
				</Footer>
			</Content>
		</Background>
	);
}

export default CreateChatModal;
