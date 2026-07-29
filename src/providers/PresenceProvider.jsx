import { useCallback, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { API_URL } from "../shared/api";
import { PresenceContext } from "../shared/context/PresenceContext";

const SERVER_URL = `${API_URL}/presence`;

export const PresenceProvider = ({ children, token }) => {
	const [onlineUsers, setOnlineUsers] = useState([]);

	useEffect(() => {
		if (!token) return;

		const socket = io(SERVER_URL, {
			auth: { token },
			transports: ["polling", "websocket"],
		});

		socket.on("connect", () => {
			socket.emit("requestOnlineUsers");
		});

		socket.on("getOnlineUsers", (users) => {
			setOnlineUsers(Array.isArray(users) ? users : []);
		});

		socket.on("userStatusChanged", (data) => {
			const userId = data?.userId;
			const status = data?.status;

			if (!userId) return;

			setOnlineUsers((prevUsers) => {
				if (status === "online") {
					return [...new Set([...prevUsers, userId])];
				} else {
					return prevUsers.filter((id) => String(id) !== String(userId));
				}
			});
		});

		return () => {
			socket.disconnect();
		};
	}, [token]);

	const isUserOnline = useCallback(
		(userId) => {
			if (!userId) return false;
			return onlineUsers.some((id) => String(id) === String(userId));
		},
		[onlineUsers],
	);

	const value = useMemo(
		() => ({ onlineUsers, isUserOnline }),
		[onlineUsers, isUserOnline],
	);

	return (
		<PresenceContext.Provider value={value}>
			{children}
		</PresenceContext.Provider>
	);
};
