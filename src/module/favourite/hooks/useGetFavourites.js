import { useQuery } from "@tanstack/react-query";
import { handleGetFavourites } from "../api/handleGetFavourites";

export const useGetFavourites = () => {
	const token = localStorage.getItem("token");

	return useQuery({
		queryKey: ["favourites"],
		queryFn: handleGetFavourites,
		enabled: !!token,
	});
};
