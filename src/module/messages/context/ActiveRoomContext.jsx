/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ActiveRoomContext = createContext(null);

export const ActiveRoomProvider = ({ children }) => {
	const [activeRoom, setActiveRoom] = useState(null);
	// activeRoom: { roomId, workspaceId, name, type } | null
	return (
		<ActiveRoomContext.Provider value={{ activeRoom, setActiveRoom }}>
			{children}
		</ActiveRoomContext.Provider>
	);
};

export const useActiveRoom = () => useContext(ActiveRoomContext);
