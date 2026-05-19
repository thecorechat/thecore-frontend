import { type RouteObject } from "react-router-dom";
import CreateWorkspacePage from "../pages/workspace/CreateWorkspacePage/CreateWorkspacePage";
import JoinCodePage from "../pages/workspace/JoinCodePage/JoinCodePage";
import WorkspacePage from "../pages/workspace/WorkspacePage/WorkspacePage";
import WorkspaceSetupPage from "../pages/workspace/WorkspaceSetupPage/WorkspaceSetupPage";
import { WorkspaceRoutesEnum } from "../shared/constants/routes";

export const workspaceRoutes: RouteObject[] = [
	{
		path: WorkspaceRoutesEnum.WORKSPACE_SETUP,
		element: <WorkspaceSetupPage />,
	},
	{
		path: WorkspaceRoutesEnum.JOIN_CODE,
		element: <JoinCodePage />,
	},
	{
		path: WorkspaceRoutesEnum.WORKSPACE,
		element: <WorkspacePage />,
	},

	{
		path: WorkspaceRoutesEnum.CREATE_WORKSPACE,
		element: <CreateWorkspacePage />,
	},
];
