export const API_URL = "https://thecore-backend-nest.onrender.com";

export const endpoints = {
	workspace: {
		create_workspace: "/workspace",
		join_space: "/workspace/join/",
		my_workspaces: "/workspace/my",
	},
	room: {
		create_room: "/workspaces/{workspaceId}/rooms",
		delete_room: "/workspaces/{workspaceId}/rooms/{roomId}",
		my_rooms: "/workspaces/{workspaceId}/rooms",
	},
};
