import FilterIcon from "../../../icons/FilterIcon";

export default function UsersFilter() {
  return (
    <label className="cursor-pointer px-5 py-2.5 rounded-[10px] bg-green-50 border border-green-200 flex items-center text-green-800 gap-0.5">
      <FilterIcon />
      Filter
      <input type="checkbox" className="hidden" />
    </label>
  );
}
