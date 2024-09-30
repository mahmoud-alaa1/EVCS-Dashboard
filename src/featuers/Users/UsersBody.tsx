import Somethig from "./Somethig";
import UsersTable from "./UsersTable";

export default function UsersBody() {
  return (
    <div className="flex gap-3 flex-wrap">
      <UsersTable className="flex-grow-2 " />
      <Somethig className="flex-grow rounded-xl p-10" />
    </div>
  );
}
