import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { handleCreateDirectRoom } from "../api/handleCreateDirectRoom";

export const useCreateDirectRoom = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (
			/** @type {{ workspaceId: string, targetUserId: string, targetUserName?: string }} */ {
				workspaceId,
				targetUserId,
				targetUserName,
			},
		) => handleCreateDirectRoom(workspaceId, targetUserId, targetUserName),
		onSuccess: (_room, { workspaceId }) => {
			// The list endpoint now returns the other participant already
			// (roomMembers[0].member.user), so a real refetch — rather than a
			// manual cache patch from this endpoint's thinner response — is
			// what gives the sidebar the fully-resolved room.
			queryClient.invalidateQueries({ queryKey: ["rooms", workspaceId] });
		},
		onError: (error) => {
			const msg = /** @type {any} */ (error)?.response?.data?.message;
			toast.error(msg ?? "Failed to start direct chat");
		},
	});
};
