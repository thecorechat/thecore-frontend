import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleDeleteRoom } from "../api/handleDeleteRoom";

export const useDeleteRoom = (workspaceId) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (/** @type {{ roomId: string }} */ { roomId }) =>
			handleDeleteRoom(workspaceId, roomId),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rooms", workspaceId] });
			toast.success("Room deleted successfully!");
		},

		onError: (error) => {
			console.error("Error deleting room:", error.message);
			toast.error(error.message);
		},
	});
};
