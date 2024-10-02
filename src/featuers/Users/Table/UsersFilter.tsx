import FilterIcon from "../../../icons/FilterIcon";
import "./UsersFilter.css";

export default function UsersFilter() {
  return (
    <div className="relative">
      <label
        htmlFor="usersFilter"
        className="cursor-pointer px-5 py-2.5 rounded-[10px] bg-green-50 border border-green-200 flex items-center text-green-800 gap-0.5"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FilterIcon />
        Filter
      </label>
      <input id="usersFilter" type="checkbox" className="absolute invisible" />
      <ul
        className="dropdown bg-green-200 absolute w-full rounded-xl"
        aria-labelledby="usersFilter"
        role="menu"
      >
        <li role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer"
            htmlFor="usersFilter"
          >
            Option 1
          </label>
        </li>
        <li role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer"
            htmlFor="usersFilter"
          >
            Option 2
          </label>
        </li>
        <li role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer"
            htmlFor="usersFilter"
          >
            Option 3
          </label>
        </li>
        <li role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer"
            htmlFor="usersFilter"
          >
            Option 4
          </label>
        </li>
      </ul>
    </div>
  );
}
