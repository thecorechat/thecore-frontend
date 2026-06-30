import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleDeleteWorkspace } from "../api/handleDeleteWorkspace";

export const useDeleteWorkspace = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (/** @type {string} */ workspaceId) =>
			handleDeleteWorkspace(workspaceId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
			toast.success("Workspace deleted");
		},
		onError: (error) => {
			const msg = /** @type {any} */ (error)?.response?.data?.message;
			toast.error(msg ?? "Failed to delete workspace");
		},
	});
};
