// import axios from "axios";
// import { API_URL, endpoints } from "../../../shared/api";
// import { socket } from "../../../../helper/socket";

// /**
//  * @param {string} content
//  * @param {string} workspaceId
//  * @param {string} roomId
//  * @param {string} file
//  */

// export const handleSendMessage = async (content, workspaceId, roomId, file, userId) => {
// try {
// 	const token = localStorage.getItem("token");
// 	const url = `${API_URL}${endpoints.message.send_message}`;
// 	// .replace("{workspaceId}", workspaceId)
// 	// .replace("{roomId}", roomId)}`;
// 	const response = await axios.post(
// 		url,
// 		{ content, workspaceId, roomId, file },
// 		{
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		},
// 	);
// 	return response.data;
// } catch (error) {
// 	const serverMessage = error.response?.data?.message;
// 	const message = Array.isArray(serverMessage)
// 		? serverMessage[0]
// 		: serverMessage || "Error when sending message";

// 	throw new Error(message);
// }
// 	socket.emit("sendMessage", {
// 		userId, // звідки береш — з auth контексту
// 		dto: {
// 			workspaceId,
// 			roomId,
// 			content: content,
// 		},
// 	});
// };
