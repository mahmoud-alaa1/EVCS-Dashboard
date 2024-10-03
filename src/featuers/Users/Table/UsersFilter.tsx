import FilterIcon from "../../../icons/FilterIcon";
import "./UsersFilter.css";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

export default function UsersFilter({
  onFilterChange,
}: {
  onFilterChange?: (filter: string) => void;
}) {
  const ref = useOutsideClick(() => {
    const usersFilter = document.getElementById(
      "usersFilter"
    ) as HTMLInputElement;
    if (usersFilter) {
      usersFilter.checked = false;
    }
  });
  return (
    <div ref={ref} className="relative">
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
        className="dropdown border-2 border-green-200 bg-green-200 absolute w-max rounded-xl"
        aria-labelledby="usersFilter"
        role="menu"
      >
        <li onClick={() => onFilterChange?.("option1")} role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer bg-light-green-300 hover:bg-light-green-500 transition-all"
            htmlFor="usersFilter"
          >
            Option 1
          </label>
        </li>
        <li onClick={() => onFilterChange?.("option2")} role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer bg-light-green-300 hover:bg-light-green-500 transition-all"
            htmlFor="usersFilter"
          >
            Option 2
          </label>
        </li>
        <li onClick={() => onFilterChange?.("option3")} role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer bg-light-green-300 hover:bg-light-green-500 transition-all"
            htmlFor="usersFilter"
          >
            Option 3
          </label>
        </li>
        <li onClick={() => onFilterChange?.("option4")} role="menuitem">
          <label
            className="block px-4 py-2 cursor-pointer bg-light-green-300 hover:bg-light-green-500 transition-all"
            htmlFor="usersFilter"
          >
            Option 4
          </label>
        </li>
      </ul>
    </div>
  );
}
