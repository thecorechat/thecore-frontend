import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleCreateRoom } from "../api/handleCreateRoom";

export const useCreateRoom = (workspaceId) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (
			/** @type {{ name: string, type: string }} */ { name, type },
		) => handleCreateRoom(workspaceId, name, type),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rooms", workspaceId] });
			toast.success("Room created successfully!");
		},

		onError: (error) => {
			console.error("Error creating room:", error.message);
			toast.error(error.message);
		},
	});
};
