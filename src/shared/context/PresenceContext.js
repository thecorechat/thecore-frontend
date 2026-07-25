import { createContext } from "react";

/**
 * @type {React.Context<{ onlineUsers: string[], isUserOnline: (userId?: string | number | null) => boolean }>}
 */

export const PresenceContext = createContext({
	onlineUsers: [],
	isUserOnline: (userId) => !!userId && false,
});
