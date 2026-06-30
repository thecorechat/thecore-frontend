import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/** @param {string} roomId */
export const handleDeleteFavourite = async (roomId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.favourite.delete_favourite.replace("{roomId}", roomId)}`;
	const response = await axios.delete(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
