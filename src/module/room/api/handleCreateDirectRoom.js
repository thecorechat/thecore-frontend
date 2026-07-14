import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * The backend generates its own internal room name for DIRECT rooms
 * (e.g. "direct-<memberId>-<memberId>"), so the response is patched with the
 * other participant's display name here.
 * @param {string} workspaceId
 * @param {string} targetUserId
 * @param {string} [targetUserName]
 */
export const handleCreateDirectRoom = async (
	workspaceId,
	targetUserId,
	targetUserName,
) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.room.create_direct_room
		.replace("{workspaceId}", workspaceId)
		.replace("{targetUserId}", targetUserId)}`;
	const response = await axios.post(
		url,
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	return targetUserName
		? { ...response.data, name: targetUserName }
		: response.data;
};
