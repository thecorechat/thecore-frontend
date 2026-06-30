import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleAddMember } from "../api/handleAddMember";

/**
 * @param {{ workspaceId: string, roomId: string }} params
 */
export const useAddMember = ({ workspaceId, roomId }) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (/** @type {string} */ targetUserId) =>
			handleAddMember(workspaceId, roomId, targetUserId),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ["roomInfo", workspaceId, roomId],
			});
			toast.success("User added to room!");
		},
		onError: (error) => {
			const msg = /** @type {any} */ (error)?.response?.data?.message;
			toast.error(msg ?? "Failed to add user to room");
		},
	});
};
