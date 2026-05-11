import { handleCreateWorkspace } from ".. /services/workspaceService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCreateWorkspace = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (name) => handleCreateWorkspace(name),

		onSuccess: (newWorkspace) => {
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });

			navigate(`/workspace/${newWorkspace.slug}`);
		},

		onError: (error) => {
			console.error("Ошибка создания воркспейса:", error.message);
		},
	});
};
