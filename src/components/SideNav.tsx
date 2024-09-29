import RectangularStatistics from "../icons/Charts";
import User from "../icons/User";
import NavItemLink from "../ui/NavItemLink";
export default function SideNav() {
  return (
    <nav>
      <ul className="flex flex-col justify-between gap-1">
        <li>
          <NavItemLink to={"overview"}>
            <RectangularStatistics />
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
          <NavItemLink to={"Option3"}>
            <User />
            Option 3
          </NavItemLink>
        </li>
        <li>
          <NavItemLink to={"Option4"}>
            <User />
            Option 4
          </NavItemLink>
        </li>
        <li>
          <NavItemLink to={"Option5"}>
            <User />
            Option 5
          </NavItemLink>
        </li>
      </ul>
    </nav>
  );
}
