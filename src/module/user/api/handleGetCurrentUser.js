import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

export const handleGetCurrentUser = async () => {
	const token = localStorage.getItem("token");
	const response = await axios.get(`${API_URL}${endpoints.user.me}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return response.data;
};
