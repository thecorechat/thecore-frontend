import { useQuery } from "@tanstack/react-query";
import { handleGetMyWorkspaces } from "../api/handleGetMyWorkspaces";

export const useGetMyWorkspaces = () => {
	const token = localStorage.getItem("token");

	return useQuery({
		queryKey: ["workspaces"],
		queryFn: handleGetMyWorkspaces,
		enabled: !!token,
		staleTime: 5 * 60 * 1000,
	});
};
