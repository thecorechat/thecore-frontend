import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleRemoveMember } from "../api/handleRemoveMember";

/**
 * @param {{ workspaceId: string, roomId: string }} params
 */
export const useRemoveMember = ({ workspaceId, roomId }) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (/** @type {string} */ memberId) =>
			handleRemoveMember(workspaceId, roomId, memberId),
		onSuccess: () => {
			queryClient.refetchQueries({
				queryKey: ["roomInfo", workspaceId, roomId],
			});
			toast.success("Member removed from room");
		},
		onError: (error) => {
			const msg = /** @type {any} */ (error)?.response?.data?.message;
			toast.error(msg ?? "Failed to remove member");
		},
	});
};
