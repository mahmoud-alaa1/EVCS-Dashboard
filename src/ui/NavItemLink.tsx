import { NavLink } from "react-router-dom";

export default function NavItemLink({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <NavLink
      to={to}
      className="py-[10px] px-[15px] flex gap-3 rounded-xl items-center transition-all "
    >
      {children}
    </NavLink>
  );
}
