import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import Radio, {
	RadioGroup,
} from "../../../../components/RadioSelect/RadioSelect";
import { WorkspaceModalEnum } from "../../../../shared/constants/routes";
import Button from "../../../../ui/Button/Button";
import { useWorkspaceCheck } from "../../hooks/useWorkspaceCheck";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	SelectBox,
	Title,
	TitleBox,
} from "./WorkspaceSetupModal.styled";

const STORAGE_KEY = "workspaceSetupType";

function WorkspaceSetupModal() {
	const [, setSearchParams] = useSearchParams();
	const { workspaces } = useWorkspaceCheck();
	const hasWorkspaces = workspaces.length > 0;
	const [accountType, setAccountType] = useState(
		() => sessionStorage.getItem(STORAGE_KEY) ?? "",
	);
	function handleAccountTypeChange(e) {
		setAccountType(e.target.value);
		sessionStorage.setItem(STORAGE_KEY, e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (accountType === "join") {
			setSearchParams({ modal: WorkspaceModalEnum.JOIN }, { replace: true });
		}
		if (accountType === "create") {
			setSearchParams({ modal: WorkspaceModalEnum.CREATE }, { replace: true });
		}
	}
	const handleClose = () => {
		setSearchParams({}, { replace: true });
	};

	return (
		<Background>
			<Content>
				{hasWorkspaces && (
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
				)}
				<TitleBox>
					<Title>Start with Spaces</Title>
				</TitleBox>
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
								<Radio value="create">Create Space</Radio>
								<Radio value="join">Join a Space</Radio>
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

export default WorkspaceSetupModal;
