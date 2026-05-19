import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleJoinAndGetSlug } from "../api/handleJoinAndGetSlug";

export const useJoinCode = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: handleJoinAndGetSlug,

		onSuccess: (workspace) => {
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
			navigate(`/workspace/${workspace.slug}`);
		},

		onError: (error) => {
			console.error("Error joining workspace:", error.message);

			toast.error(error.message);
		},
	});
};
