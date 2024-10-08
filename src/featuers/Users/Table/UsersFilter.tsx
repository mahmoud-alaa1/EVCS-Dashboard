import { useSearchParams } from "react-router-dom";
import FilterIcon from "../../../icons/FilterIcon";
import DropdownMenu from "../../../ui/DropdownMenu";

export default function UsersFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <DropdownMenu
      render={(item) => (
        <li
          className="block px-4 py-2 cursor-pointer bg-light-green-300 hover:bg-light-green-500 transition-all"
          onClick={() => {
            searchParams.set("filter", item);
            searchParams.set("page", "1");
            setSearchParams(searchParams);
          }}
          role="menuitem"
          key={item}
        >
          {item}
        </li>
      )}
      items={["All", "Normal", "Golden", "Premium"]}
    >
      <button>
        <p className=" cursor-pointer px-5 py-2.5 rounded-[10px] bg-green-50 border border-green-200 flex items-center text-green-800 gap-0.5">
          <FilterIcon />
          Filter
        </p>
      </button>
    </DropdownMenu>
  );
}
