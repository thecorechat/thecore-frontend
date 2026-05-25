import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleCreateWorkspace } from "../api/handleCreateWorkspace";

export const useCreateWorkspace = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: handleCreateWorkspace,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
			toast.success("Workspace created successfully!");
		},

		onError: (error) => {
			console.error("Error creating workspace:", error.message);
			toast.error(error.message);
		},
	});
};
