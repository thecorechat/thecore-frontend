import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/**
 * @param {string} workspaceId
 * @param {string} search
 */
export const handleSearchUsers = async (workspaceId, search) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.workspace.search_members.replace("{id}", workspaceId)}`;
	const response = await axios.get(url, {
		params: { id: workspaceId, string: search },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
