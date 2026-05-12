import axios from "axios";

const API_URL = "http://localhost:3000"; // Твой URL бэкенда

export const handleCreateWorkspace = async (name) => {
	try {
		const token = localStorage.getItem("token");

		const response = await axios.post(
			`${API_URL}/workspaces`,
			{ name },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);

		return response.data;
	} catch (error) {
		const message =
			error.response?.data?.message || "Ошибка при создании воркспейса";
		throw new Error(message);
	}
};
