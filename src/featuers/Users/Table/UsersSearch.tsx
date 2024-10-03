import SearchInput from "../../../ui/SearchInput";

export default function UsersSearch({
  onSearch,
}: {
  onSearch: (search: string) => void;
}) {
  return (
    <SearchInput
      className=" border border-light-green-600"
      name="search"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Find a customer..."
    />
  );
}
