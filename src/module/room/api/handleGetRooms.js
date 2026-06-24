import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/** @param {string} workspaceId */
export const handleGetRooms = async (workspaceId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.room.my_rooms.replace("{workspaceId}", workspaceId)}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
