import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 * @param {string} name
 * @param {string} type
 */
export const handleCreateRoom = async (workspaceId, name, type) => {
	try {
		const token = localStorage.getItem("token");
		const url = `${API_URL}${endpoints.room.create_room.replace("{workspaceId}", workspaceId)}`;

		const response = await axios.post(
			url,
			{ name, type },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		return response.data;
	} catch (error) {
		const serverMessage = error.response?.data?.message;
		const message = Array.isArray(serverMessage)
			? serverMessage[0]
			: serverMessage || "Error when creating room";

		throw new Error(message);
	}
};
