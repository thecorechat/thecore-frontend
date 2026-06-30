import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/** @param {string} roomId */
export const handleAddFavourite = async (roomId) => {
	const token = localStorage.getItem("token");
	const url = `${API_URL}${endpoints.favourite.add_favourite.replace("{roomId}", roomId)}`;
	console.log("[addFavourite] url:", url, "| roomId:", roomId);
	const response = await axios.post(
		url,
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	return response.data;
};
