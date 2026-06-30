import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

export const handleGetFavourites = async () => {
	const token = localStorage.getItem("token");
	const response = await axios.get(
		`${API_URL}${endpoints.favourite.get_favourite}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	return response.data;
};
