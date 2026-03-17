import { useSidebar } from "./SidebarContext";
import { RailButton } from "./SidebarRail.styled";

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
