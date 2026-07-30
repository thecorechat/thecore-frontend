import { io } from "socket.io-client";
import { API_URL } from "../src/shared/api";

export const socket = io(`${API_URL}/messages`, {
	withCredentials: false,
	transports: ["polling", "websocket"],
	auth: {
		token: localStorage.getItem("token"),
	},
});

// export const socket = io(`${API_URL}/messages`, {
// 	withCredentials: true,
// 	transports: ["websocket", "polling"],
// 	auth: {
// 		token: getToken(),
// 	},
// });
