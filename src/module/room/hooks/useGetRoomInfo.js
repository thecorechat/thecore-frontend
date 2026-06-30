import { useQuery } from "@tanstack/react-query";
import { handleGetRoomInfo } from "../api/handleGetRoomInfo";

/**
 * @param {string} workspaceId
 * @param {string} roomId
 */
export const useGetRoomInfo = (workspaceId, roomId) => {
	const token = localStorage.getItem("token");

	return useQuery({
		queryKey: ["roomInfo", workspaceId, roomId],
		queryFn: () => handleGetRoomInfo(workspaceId, roomId),
		enabled: !!token && !!workspaceId && !!roomId,
		staleTime: 5 * 60 * 1000,
	});
};
