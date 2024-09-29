import Logo from "../ui/Logo";
import Logout from "../ui/Logout";
import SideNav from "./SideNav";

export default function Sidebar() {
  return (
    <aside className="text-sidebar-text flex flex-col justify-between">
      <div>
        <Logo />
        <SideNav />
      </div>
      <Logout />
    </aside>
  );
}
