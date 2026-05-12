import { RailButton } from "./SidebarRail.styled";
import { useSidebar } from "./useSidebar";

export const SidebarRail = (props) => {
	const { toggleSidebar } = useSidebar();

	return (
		<RailButton
			aria-label="Toggle Sidebar"
			title="Toggle Sidebar"
			onClick={toggleSidebar}
			{...props}
		/>
	);
};
