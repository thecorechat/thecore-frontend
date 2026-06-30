import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleAddFavourite } from "../api/handleAddFavourite";

export const useAddFavourite = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: handleAddFavourite,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["favourites"] });
			toast.success("Added to favourites!");
		},
		onError: (error) => {
			const data = /** @type {any} */ (error)?.response?.data;
			const msg =
				data?.statusCode === 403
					? "You must be a room member to add it to favourites"
					: (data?.message ?? "Failed to add to favourites");
			toast.error(msg);
		},
	});
};
