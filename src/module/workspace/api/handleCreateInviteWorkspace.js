import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/** * Creates a reusable group invite for a workspace.
 * @param {string} workspaceId
 * @param {string} role
 */
export const handleCreateGroupInvite = async (
	workspaceId,
	role = "TEACHER",
) => {
	try {
		const token = localStorage.getItem("token");

		const response = await axios.post(
			`${API_URL}${endpoints.workspace.create_group_invite(workspaceId)}`,
			{ role },
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
			: serverMessage || "Error when creating group invite";

		throw new Error(message);
	}
};

/** * Creates a one-time personal invite for a workspace.
 * @param {string} workspaceId
 * @param {string} role
 */
export const handleCreatePersonalInvite = async (
	workspaceId,
	role = "TEACHER",
) => {
	try {
		const token = localStorage.getItem("token");

		const response = await axios.post(
			`${API_URL}${endpoints.workspace.create_personal_invite(workspaceId)}`,
			{ role },
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
			: serverMessage || "Error when creating personal invite";

		throw new Error(message);
	}
};
