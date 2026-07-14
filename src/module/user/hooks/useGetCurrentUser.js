import { useQuery } from "@tanstack/react-query";
import { handleGetCurrentUser } from "../api/handleGetCurrentUser";

export const useGetCurrentUser = () => {
	const token = localStorage.getItem("token");

	return useQuery({
		queryKey: ["currentUser"],
		queryFn: handleGetCurrentUser,
		enabled: !!token,
		staleTime: 5 * 60 * 1000,
	});
};
