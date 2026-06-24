import { useQuery } from "@tanstack/react-query";
import { handleGetRooms } from "../api/handleGetRooms";

/** @param {string} workspaceId */
export const useGetRooms = (workspaceId) => {
	const token = localStorage.getItem("token");

	return useQuery({
		queryKey: ["rooms", workspaceId],
		queryFn: () => handleGetRooms(workspaceId),
		enabled: !!token && !!workspaceId,
	});
};
