// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { handleSendMessage } from "../api/handleSendMessage";

// /**
//  * @param {{ workspaceId: string, roomId: string }} params
//  */

// export const useSendMessage = ({ workspaceId, roomId }) => {
// 	const queryClient = useQueryClient();

// 	return useMutation({
// 		mutationFn: (
// 			/** @type {{content: string, workspaceId: string, roomId: string,  file: string, userId:string}} */ {
// 				content,
// 				workspaceId,
// 				roomId,
// 				file,
// 				userId
// 			},
// 		) => handleSendMessage(content, workspaceId, roomId, file, userId),

// 		onSuccess: () => {
// 			queryClient.invalidateQueries({
// 				queryKey: ["message", workspaceId, roomId],
// 			});
// 			toast.success("Message sended successfully!");
// 		},

// 		onError: (error) => {
// 			console.error("Error sending message:", error.message);
// 			toast.error(error.message);
// 		},
// 	});
// };
