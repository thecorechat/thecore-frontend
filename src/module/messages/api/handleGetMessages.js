import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/** @param {string} roomId */
export const handleGetMessages = async (roomId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.message.get_all_messages.replace("{roomId}", roomId)}`;
	const response = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
