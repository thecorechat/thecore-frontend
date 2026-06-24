import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import ChatSetupModal from "../../../module/room/components/ChatSetupModal/ChatSetupModal";
import CreateChatModal from "../../../module/room/components/CreateChatModal/CreateChatModal";
import InviteChatSetupModal from "../../../module/room/components/InviteChatSetupModal/InviteChatSetupModal";
import CreateWorkspaceModal from "../../../module/workspace/components/CreateWorkspaceModal/CreateWorkspaceModal";
import JoinCodeModal from "../../../module/workspace/components/JoinCodeModal/JoinCodeModal";
import WorkspaceSetupModal from "../../../module/workspace/components/WorkspaceSetupModal/WorkspaceSetupModal";
import { useCreateWorkspace } from "../../../module/workspace/hooks/useCreateWorkspace";
import { useWorkspaceCheck } from "../../../module/workspace/hooks/useWorkspaceCheck";
import { API_URL } from "../../../shared/api";
import {
	ChatModalEnum,
	WorkspaceModalEnum,
} from "../../../shared/constants/routes";
import { fetchWithAuth } from "../../../utils/fetchWithAuth";
import ChatPage from "../../ChatPage/ChatPage";
import { Backdrop, ModalContent, ModalOverlay } from "./WorkspaceLayout.styled";

function WorkspaceLayout() {
	const { workspaces, isLoading, isFetching } = useWorkspaceCheck();
	const [searchParams, setSearchParams] = useSearchParams();
	const autoCreateAttempted = useRef(false);

	const { data: userInfo } = useQuery({
		queryKey: ["userMe"],
		queryFn: async () => {
			const response = await fetchWithAuth(`${API_URL}/user/me`);
			if (!response.ok) throw new Error("Failed to fetch user");
			return response.json();
		},
		enabled: !!localStorage.getItem("token"),
	});

	const { mutate: createWorkspace } = useCreateWorkspace();

	const modalType = searchParams.get("modal");
	const isModalOpen = Boolean(modalType);

	useEffect(() => {
		if (isLoading || isFetching || !userInfo || autoCreateAttempted.current)
			return;

		if (workspaces && workspaces.length === 0) {
			autoCreateAttempted.current = true;
			const startTime = Date.now();
			const toastId = toast.loading("Creating your workspace...");
			createWorkspace(`${userInfo.firstName} workspace`, {
				onSuccess: () => {
					toast.dismiss(toastId);
					console.log(
						`Workspace created in ${((Date.now() - startTime) / 1000).toFixed(2)}s`,
					);
				},
				onError: () => {
					toast.dismiss(toastId);
					console.log(
						`Workspace creation failed after ${((Date.now() - startTime) / 1000).toFixed(2)}s`,
					);
				},
			});
		}
	}, [isLoading, isFetching, workspaces, userInfo, createWorkspace]);

	const handleOverlayClose = () => {
		if (workspaces.length === 0) return;

		setSearchParams({}, { replace: true });
	};

	const renderModalContent = () => {
		switch (modalType) {
			case WorkspaceModalEnum.SETUP:
				return <WorkspaceSetupModal />;
			case WorkspaceModalEnum.CREATE:
				return <CreateWorkspaceModal />;
			case WorkspaceModalEnum.JOIN:
				return <JoinCodeModal />;
			case ChatModalEnum.SETUP:
				return <ChatSetupModal />;
			case ChatModalEnum.CREATE:
				return <CreateChatModal />;
			case ChatModalEnum.MAIN_SETUP:
				return <InviteChatSetupModal />;
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
