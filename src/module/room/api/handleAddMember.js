import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 * @param {string} roomId
 * @param {string} targetUserId
 */
export const handleAddMember = async (workspaceId, roomId, targetUserId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.room.add_member
		.replace("{workspaceId}", workspaceId)
		.replace("{roomId}", roomId)}`;
	const response = await axios.post(
		url,
		{ targetUserId },
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	return response.data;
};
