import { lazy, Suspense } from "react";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const WorkspaceLayout = lazy(
	() => import("../pages/workspace/WorkspaceLayout/WorkspaceLayout"),
);

export const workspaceRoutes = [
	{
		path: "/chat",
		element: (
			<ProtectedRoute>
				<Suspense fallback={<div>Loading...</div>}>
					<WorkspaceLayout />
				</Suspense>
			</ProtectedRoute>
		),
	},
];
