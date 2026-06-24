import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import Radio, {
	RadioGroup,
} from "../../../../components/RadioSelect/RadioSelect";
import { ChatModalEnum } from "../../../../shared/constants/routes";
import Button from "../../../../ui/Button/Button";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	SelectBox,
} from "./InviteChatSetupModal.styled";

const STORAGE_KEY = "workspaceSetupType";

function InviteChatSetupModal() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [accountType, setAccountType] = useState(
		() => sessionStorage.getItem(STORAGE_KEY) ?? "",
	);
	function handleAccountTypeChange(e) {
		setAccountType(e.target.value);
		sessionStorage.setItem(STORAGE_KEY, e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		// if (accountType === "join") {
		// 	setSearchParams({ modal: WorkspaceModalEnum.JOIN }, { replace: true });
		// }
		if (accountType === "create") {
			setSearchParams((prev) => {
				prev.set("modal", ChatModalEnum.SETUP);

				return prev;
			});
		}
	}
	const handleClose = () => {
		setSearchParams({}, { replace: true });
	};

	const workspaceId = searchParams.get("workspaceId");
	console.log("Invite Chat Setup", workspaceId);

	return (
		<Background>
			<Content>
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

				<form
					onSubmit={handleSubmit}
					noValidate
					style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
				>
					<ContentForm>
						<SelectBox>
							<RadioGroup
								value={accountType}
								onChange={handleAccountTypeChange}
							>
								<Radio value="create">Create a Chat</Radio>
								<Radio value="invite">Invite a person</Radio>
							</RadioGroup>
						</SelectBox>
						<Bottom>
							<ButtonBlock>
								<Button type="submit" nonactive={!accountType}>
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

export default InviteChatSetupModal;
