import { createContext, useCallback, useState } from "react";

const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = useCallback(() => {
		setIsOpen((prev) => !prev);
	}, []);

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};
