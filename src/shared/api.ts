export const API_URL = "https://thecore-backend-nest.onrender.com";

export const endpoints = {
	workspace: {
		create_workspace: "/workspace",
		join_space: "/workspace/join/",
		my_workspaces: "/workspace/my",
		get_all_members: "/workspace/{id}/members",
		search_members: "/workspace/{id}/members/search",
		delete_workspace: "/workspace/{id}",
	},
	room: {
		create_room: "/workspaces/{workspaceId}/rooms",
		delete_room: "/workspaces/{workspaceId}/rooms/{roomId}",
		my_rooms: "/workspaces/{workspaceId}/rooms",
		add_member: "/workspaces/{workspaceId}/rooms/{roomId}/members",
		room_info: "/workspaces/{workspaceId}/rooms/{roomId}",
		remove_member:
			"/workspaces/{workspaceId}/rooms/{roomId}/members/{memberId}",
		create_direct_room: "/workspaces/{workspaceId}/rooms/direct/{targetUserId}",
	},
	favourite: {
		get_favourite: "/favourites",
		add_favourite: "/favourites/{roomId}",
		delete_favourite: "/favourites/{roomId}",
	},
	user: {
		search: "/user",
		me: "/user/me",
	},
};
