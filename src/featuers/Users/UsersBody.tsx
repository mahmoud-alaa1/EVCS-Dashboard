import Somethig from "./Details/Somethig";
import UsersTable from "./Table/UsersTable";

export default function UsersBody() {
  return (
    <div className="flex gap-3 flex-wrap flex-grow w-full ">
      <UsersTable className="flex-grow gap-2.5 flex flex-col" />
      <Somethig className="w-[33%] rounded-xl p-10" />
    </div>
  );
}
