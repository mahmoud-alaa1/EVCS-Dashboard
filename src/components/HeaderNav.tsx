import SearchInput from "../ui/SearchInput";
import Tag from "../ui/Tag";

export default function HeaderNav() {
  return (
    <nav className="flex gap-4 items-center flex-wrap ">
      <form>
        <SearchInput className="border border-light-green-600" name="searchDash" placeholder="Search" />
      </form>
      <div className="flex gap-2 items-center">
        <img
          className="w-[40px] h-[40px]  rounded-full border-[#31531354]  border-[1px] border-solid "
          src="/admin.png"
          alt="admin photo"
        />
        <div className="flex flex-col gap-1">
          <span className="text-[1rem] text-[#315313]">Moahmed K.</span>
          <Tag className="text-xs" size="sm" color="admin">
            Admin
          </Tag>
        </div>
      </div>
    </nav>
  );
}
