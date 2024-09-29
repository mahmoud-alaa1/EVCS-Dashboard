import { NavLink } from "react-router-dom";
import SignInSquare from "../icons/SignInSquare";
export default function Logout() {
  return (
    <NavLink
      to="login"
      className="text-sidebar-text  bg-[#8F8F8F1A] flex items-center gap-4 p-2 rounded-[5px] justify-center"
    >
      <SignInSquare />
      <span className="opacity-50">Logout</span>
    </NavLink>
  );
}
