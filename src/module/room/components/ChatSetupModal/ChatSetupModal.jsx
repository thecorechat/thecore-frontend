import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Radio, {
	RadioGroup,
} from "../../../../components/RadioSelect/RadioSelect";
import { ChatModalEnum } from "../../../../shared/constants/routes";
import Button from "../../../../ui/Button/Button";
import HeaderBack from "../../../../ui/HeaderBack/HeaderBack";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	SelectBox,
	Title,
	TitleBox,
} from "./ChatSetupModal.styled";

const STORAGE_KEY = "chatSetupType";

function RoomSetupModal() {
	const [searchParams, setSearchParams] = useSearchParams();
	const workspaceId = searchParams.get("workspaceId");
	const [roomType, setRoomType] = useState(
		() => sessionStorage.getItem(STORAGE_KEY) ?? "",
	);

	function handleRoomTypeChange(e) {
		setRoomType(e.target.value);
		sessionStorage.setItem(STORAGE_KEY, e.target.value);
	}

	const handleBackClick = () => {
		setSearchParams((prev) => {
			prev.set("modal", ChatModalEnum.MAIN_SETUP);
			prev.delete("type");
			return prev;
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		if (roomType) {
			setSearchParams((prev) => {
				prev.set("modal", ChatModalEnum.CREATE);
				prev.set("type", roomType.toUpperCase());
				return prev;
			});
		}
	}

	console.log("Setup Chat", workspaceId);

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick}>Create {roomType}</HeaderBack>

				<TitleBox>
					<Title>Choose type</Title>
				</TitleBox>
				<form
					onSubmit={handleSubmit}
					noValidate
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<ContentForm>
						<SelectBox>
							<RadioGroup value={roomType} onChange={handleRoomTypeChange}>
								<Radio value="chat">Chat</Radio>
								<Radio value="channel">Channel</Radio>
							</RadioGroup>
						</SelectBox>
						<Bottom>
							<ButtonBlock>
								<Button type="submit" nonactive={!roomType}>
									Continue
								</Button>
							</ButtonBlock>
						</Bottom>
					</ContentForm>
				</form>
			</Content>
		</Background>
	);
}

export default RoomSetupModal;
