export const API_URL = "https://thecore-backend-nest.onrender.com";

export const endpoints = {
	workspace: {
		create_workspace: "/workspace",
		join_space: "/workspace/join/",
		my_workspaces: "/workspace/my",
		get_all_members: "/workspace/{id}/members",
		search_members: "/workspace/{id}/members/search",
		delete_workspace: "/workspace/{id}",
		create_group_invite: (id) => `/workspace/${id}/invite/group`,
		create_personal_invite: (id) => `/workspace/${id}/invite/personal`,
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
	message: {
		send_message: "/messages",
		edit_message: "/messages/{id}",
		delete_message: "/messages/{id}",
		get_all_messages: "/messages/room/{roomId}",
		get_last_message: "/messages/workspace/{workspaceId}",
		upload_files: "/messages/upload",
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
