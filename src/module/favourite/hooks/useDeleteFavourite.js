import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleDeleteFavourite } from "../api/handleDeleteFavourite";

export const useDeleteFavourite = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: handleDeleteFavourite,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favourites"] });
			toast.success("Removed from favourites!");
		},
		onError: (error) => {
			const msg = /** @type {any} */ (error)?.response?.data?.message;
			toast.error(msg ?? "Failed to remove from favourites");
		},
	});
};
