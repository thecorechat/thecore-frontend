import { useQuery } from "@tanstack/react-query";
import { handleGetMessages } from "../api/handleGetMessages";

/** @param {string} roomId */
export const useGetMessages = (roomId) => {
	// const token = localStorage.getItem("token");

	return useQuery({
		queryKey: ["room", roomId],
		queryFn: () => handleGetMessages(roomId),
		enabled: !!roomId,
		staleTime: 5 * 60 * 1000,
	});
};
