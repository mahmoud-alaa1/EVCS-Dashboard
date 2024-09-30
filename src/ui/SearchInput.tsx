import Search from "../icons/Search";
import { SearchInputTypes } from "../types/types";

function SearchInput({ className, placeholder = "" }: SearchInputTypes) {
  return (
    <label className="relative">
      <input
        type="text"
        name=""
        id="search"
        className={`rounded-[9.52px] pl-10 pr-5 py-2 bg-grey-light outline-none ${className}`}
        placeholder={placeholder}
      />
      <Search className="absolute top-[50%] translate-y-[-50%] translate-x-3 opacity-55" />
    </label>
  );
}

export default SearchInput;
