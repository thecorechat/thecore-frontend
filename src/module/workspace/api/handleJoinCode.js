import axios from "axios";
import { API_URL, endpoints } from "../../../shared/api";

/** @param {string} code */
export const handleJoinCode = async (code) => {
	try {
		const token = localStorage.getItem("token");

		const response = await axios.post(
			`${API_URL}${endpoints.workspace.join_space}${code}`,
			{},
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
			: serverMessage || "Error when joining workspace";

		throw new Error(message);
	}
};
