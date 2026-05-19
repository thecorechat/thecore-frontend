import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Radio, { RadioGroup } from "../../../components/RadioSelect/RadioSelect";
import { WorkspaceRoutesEnum } from "../../../shared/constants/routes";
import Button from "../../../ui/Button/Button";
import HeaderBack from "../../../ui/HeaderBack/HeaderBack";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	SelectBox,
	Title,
	TitleBox,
} from "./WorkspaceSetupPage.styled";

const STORAGE_KEY = "workspaceSetupType";

function WorkspaceSetupPage() {
	const [accountType, setAccountType] = useState(
		() => sessionStorage.getItem(STORAGE_KEY) ?? "",
	);
	const navigate = useNavigate();

	function handleAccountTypeChange(e) {
		setAccountType(e.target.value);
		sessionStorage.setItem(STORAGE_KEY, e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (accountType === "join") {
			navigate(WorkspaceRoutesEnum.JOIN_CODE);
		}
		if (accountType === "create") {
			navigate(WorkspaceRoutesEnum.CREATE_WORKSPACE);
		}
	}

	return (
		<Background>
			<Content>
				<HeaderBack
				//  onClick={handleBackClick}
				/>

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

export default WorkspaceSetupPage;
