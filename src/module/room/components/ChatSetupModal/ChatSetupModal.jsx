import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import Radio, {
	RadioGroup,
} from "../../../../components/RadioSelect/RadioSelect";
import { ChatModalEnum } from "../../../../shared/constants/routes";
import Button from "../../../../ui/Button/Button";
// import HeaderBack from "../../../../ui/HeaderBack/HeaderBack";
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

	// const handleBackClick = () => {
	// 	setSearchParams((prev) => {
	// 		prev.set("modal", ChatModalEnum.MAIN_SETUP);
	// 		prev.delete("type");
	// 		return prev;
	// 	});
	// };

	const handleClose = () => {
		setSearchParams({}, { replace: true });
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
				{/* <HeaderBack onClick={handleBackClick}>Create {roomType}</HeaderBack> */}
				<button
					type="button"
					onClick={handleClose}
					style={{
						position: "absolute",
						top: "20px",
						left: "20px",
						background: "none",
						border: "none",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "4px",
					}}
				>
					<IoClose size={24} color="#555" />
				</button>

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
