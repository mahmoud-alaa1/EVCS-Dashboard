import Somethig from "./Somethig";
import UsersTable from "./UsersTable";

export default function UsersBody() {
  return (
    <div className="flex gap-3 flex-wrap flex-grow ">
      <UsersTable className="flex-grow-4 gap-2.5 flex flex-col" />
      <Somethig className="flex-grow-3 rounded-xl p-10" />
    </div>
  );
}
