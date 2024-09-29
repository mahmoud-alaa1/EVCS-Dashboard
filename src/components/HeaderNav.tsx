import Search from "../icons/Search";
import Tag from "../ui/Tag";

export default function HeaderNav() {
  return (
    <nav className="flex gap-4 items-center ">
      <form>
        <label className="relative focus:text-red-600">
          <input
            type="text"
            name=""
            id="search"
            className="rounded-xl pl-8 pr-5 py-2 bg-grey-light border-green-900"
            placeholder="Search "
          />
          <Search className="absolute top-[50%] translate-y-[-50%] translate-x-1 opacity-55" />
        </label>
      </form>
      <div className="flex gap-2 items-center">
        <img
          className="w-[40px] h-[40px]  rounded-full border-[#31531354]  border-[1px] border-solid "
          src="admin.png"
          alt="admin photo"
        />
        <div className="flex flex-col gap-1">
          <span className="text-[1rem] text-[#315313]">Moahmed K.</span>

          <Tag size="sm" className="text-[12px] bg-[#FFCD71]">
            Admin
          </Tag>
        </div>
      </div>
    </nav>
  );
}
