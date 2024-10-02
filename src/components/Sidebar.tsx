import Logo from "../ui/Logo";
import Logout from "../ui/Logout";
import SideNav from "./SideNav";

export default function Sidebar({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`text-sidebar-text flex flex-col justify-between h-[90vh] ${className}`}
    >
      <div>
        <Logo />
        <SideNav />
      </div>
      <Logout />
    </aside>
  );
}
