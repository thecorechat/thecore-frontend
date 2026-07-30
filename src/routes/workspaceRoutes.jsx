import { lazy, Suspense } from "react";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Spinner from "../ui/Spinner/Spinner";

const WorkspaceLayout = lazy(
	() => import("../pages/workspace/WorkspaceLayout/WorkspaceLayout"),
);

export const workspaceRoutes = [
	{
		path: "/chat",
		element: (
			<ProtectedRoute>
				<Suspense fallback={<Spinner />}>
					<WorkspaceLayout />
				</Suspense>
			</ProtectedRoute>
		),
	},
];
