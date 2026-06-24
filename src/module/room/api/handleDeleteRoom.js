import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 * @param {string} roomId
 */
export const handleDeleteRoom = async (workspaceId, roomId) => {
	try {
		const token = localStorage.getItem("token");
		const url = `${API_URL}${endpoints.room.delete_room
			.replace("{workspaceId}", workspaceId)
			.replace("{roomId}", roomId)}`;

		const response = await axios.delete(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		const serverMessage = error.response?.data?.message;
		const message = Array.isArray(serverMessage)
			? serverMessage[0]
			: serverMessage || "Error when deleting room";

		throw new Error(message);
	}
};
