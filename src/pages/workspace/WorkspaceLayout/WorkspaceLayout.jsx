import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useWorkspaceCheck } from "../../../module/workspace/hooks/useWorkspaceCheck";
import { WorkspaceModalEnum } from "../../../shared/constants/routes";
import ChatPage from "../../ChatPage/ChatPage";
import CreateWorkspace from "../CreateWorkspacePage/CreateWorkspacePage";
import JoinCode from "../JoinCodePage/JoinCodePage";
import WorkspaceSetup from "../WorkspaceSetupPage/WorkspaceSetupPage";
import { Backdrop, ModalContent, ModalOverlay } from "./WorkspaceLayout.styled";

function WorkspaceLayout() {
	const { workspaces, isLoading, isFetching } = useWorkspaceCheck();
	const [searchParams, setSearchParams] = useSearchParams();

	const modalType = searchParams.get("modal");
	const isModalOpen = Boolean(modalType);

	useEffect(() => {
		if (isLoading || isFetching) return;

		if (workspaces && workspaces.length === 0 && !modalType) {
			setSearchParams({ modal: "setup" }, { replace: true });
		}
	}, [isLoading, isFetching, workspaces, modalType, setSearchParams]);

	const handleOverlayClose = () => {
		if (workspaces.length === 0) return;

		setSearchParams({}, { replace: true });
	};

	const renderModalContent = () => {
		switch (modalType) {
			case WorkspaceModalEnum.SETUP:
				return <WorkspaceSetup />;
			case WorkspaceModalEnum.CREATE:
				return <CreateWorkspace />;
			case WorkspaceModalEnum.JOIN:
				return <JoinCode />;
			default:
				return null;
		}
	};

	return (
		<>
			<ChatPage />
			{isModalOpen && (
				<ModalOverlay>
					<Backdrop
						type="button"
						aria-label="Close modal"
						onClick={handleOverlayClose}
					/>
					<ModalContent>{renderModalContent()}</ModalContent>
				</ModalOverlay>
			)}
		</>
	);
}

export default WorkspaceLayout;
