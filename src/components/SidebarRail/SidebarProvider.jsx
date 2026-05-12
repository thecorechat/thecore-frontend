import { useCallback, useState } from "react";
import { SidebarContext } from "./SidebarContext";

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
