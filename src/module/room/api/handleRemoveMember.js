import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 * @param {string} roomId
 * @param {string} memberId
 */
export const handleRemoveMember = async (workspaceId, roomId, memberId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.room.remove_member
		.replace("{workspaceId}", workspaceId)
		.replace("{roomId}", roomId)
		.replace("{memberId}", memberId)}`;
	const response = await axios.delete(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
