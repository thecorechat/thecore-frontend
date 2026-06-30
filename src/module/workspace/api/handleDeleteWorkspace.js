import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 */
export const handleDeleteWorkspace = async (workspaceId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.workspace.delete_workspace.replace("{id}", workspaceId)}`;
	const response = await axios.delete(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
