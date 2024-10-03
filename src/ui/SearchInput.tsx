import Search from "../icons/Search";
import { InputTypes } from "../types/types";

function SearchInput({ className, placeholder = "" }: InputTypes) {
  return (
    <label className={`relative text-light-green-700 `}>
      <input
        type="text"
        name=""
        id="search"
        className={`w-full rounded-[9.52px] placeholder:font-medium placeholder:text-light-green-700 pl-10 pr-5 py-2 bg-light-green-300 outline-none ${className}`}
        placeholder={placeholder}
      />
      <Search className="absolute top-[50%] translate-y-[-50%] translate-x-3 opacity-55" />
    </label>
  );
}

export default SearchInput;
