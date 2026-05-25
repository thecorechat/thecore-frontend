import { useQuery } from "@tanstack/react-query";
import { handleGetMyWorkspaces } from "../api/handleGetMyWorkspaces";

export function useWorkspaceCheck() {
	const token = localStorage.getItem("token");

	const {
		data: workspaces = [],
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["workspaces"],
		queryFn: handleGetMyWorkspaces,
		enabled: !!token,
	});

	return {
		workspaces,
		isLoading,
		isFetching,
		hasWorkspaces: workspaces.length > 0,
		isAuthenticated: !!token,
	};
}
