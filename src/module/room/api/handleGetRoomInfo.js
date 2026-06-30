import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 * @param {string} roomId
 */
export const handleGetRoomInfo = async (workspaceId, roomId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.room.room_info
		.replace("{workspaceId}", workspaceId)
		.replace("{roomId}", roomId)}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
