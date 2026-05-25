import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleJoinAndGetSlug } from "../api/handleJoinAndGetSlug";

export const useJoinCode = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: handleJoinAndGetSlug,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
			toast.success("Joined workspace successfully!");
		},

		onError: (error) => {
			console.error("Error joining workspace:", error.message);
			toast.error(error.message);
		},
	});
};
