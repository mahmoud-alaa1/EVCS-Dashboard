import Charts from "../icons/Charts";
import User from "../icons/User";
import Van from "../icons/Van";
import NavItemLink from "../ui/NavItemLink";
export default function SideNav() {
  return (
    <nav>
      <ul className="flex flex-col justify-between gap-1">
        <li>
          <NavItemLink to={"overview"}>
            <Charts />
            Dashboard
          </NavItemLink>
        </li>
        <li>
          <NavItemLink to={"users"}>
            <User />
            Users
          </NavItemLink>
        </li>
        <li>
          <NavItemLink to={"vans"}>
            <Van />
            Vans
          </NavItemLink>
        </li>
      </ul>
    </nav>
  );
}
