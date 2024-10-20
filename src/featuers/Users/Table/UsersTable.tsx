import Table from "../../../ui/Table";
import "./UsersTableStyle.css";
import Pagination from "../../../ui/Pagination";
import Tag from "../../../ui/Tag";
import DownloadCSV from "./DownloadCSV";
import UsersFilter from "./UsersFilter";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import UsersSearch from "./UsersSearch";
import { TUsersTableProps } from "../../../types/types";
import SortButton from "../../../ui/SortButton";

type TProps = TUsersTableProps;

export default function UsersTable({ className, data }: TProps) {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  //Navigate to user details
  function navigateToNewId(newId: string) {
    navigate({
      pathname: `/users/${newId}`,
      search: `?${searchParams.toString()}`,
    });
  }

  //Seach filter
  const search = searchParams.get("search")?.toLowerCase();
  let filterData = search
    ? data.filter((el) => el.name.toLowerCase().includes(search) || el.email.toLowerCase().includes(search))
    : data;

  //Subscribe filter
  const subscribeFilter = searchParams.get("filter")?.toLowerCase() ?? "all";
  if (subscribeFilter !== "all")
    filterData = filterData.filter((el) => el.subscription.toLowerCase() == subscribeFilter);

  //Sort
  let copyData = [...filterData];
  const sort = searchParams.get("sort") ?? "default";
  if (sort !== "default") {
    copyData = copyData.sort((a, b) => {
      const leftDate = new Date(a.registration);
      const rightDate = new Date(b.registration);
      if (sort === "high") {
        return leftDate > rightDate ? 1 : -1;
      } else {
        return leftDate < rightDate ? 1 : -1;
      }
    });
  } else {
    copyData = filterData;
  }

  //pagination
  const page = Number(searchParams.get("page")) || 1;
  copyData = copyData.slice((page - 1) * 10, page * 10);

  return (
    <div className={className}>
      <Pagination length={filterData.length} />
      <div className="flex flex-wrap w-full gap-2.5">
        <UsersSearch
          onSearch={(value) => {
            searchParams.set("search", value);
            setSearchParams(searchParams);
          }}
        />
        <UsersFilter />
        <DownloadCSV data={data} />
      </div>

      <Table className="min-w-full table-fixed text-left">
        <Table.Header className="text-xs font-[500] bg-green-50">
          <Table.Heading className="w-[31.2572%] px-5 py-3">Name</Table.Heading>

          <Table.Heading className="w-[28.8350%]  px-5 py-3">Location</Table.Heading>

          <Table.Heading className="w-[20%]  px-5 py-3">Subscription</Table.Heading>

          <Table.Heading className="w-[20%]  px-5 py-3">
            <SortButton>Registeration</SortButton>
          </Table.Heading>
        </Table.Header>

        <Table.Body
          data={copyData}
          render={(user) => {
            return (
              <tr
                className={`${
                  user.id === userId ? "border-green-600" : ""
                } cursor-pointer border-b-3 hover:bg-light-green-200 transition-all active:bg-light-green-500`}
                key={user.id}
                onClick={() => navigateToNewId(user.id.toString())}
              >
                <td className="px-5 py-2">
                  <div>
                    <p className="">{user.name}</p>
                    <p className="text-neutral-500">{user.email}</p>
                  </div>
                </td>
                <td className="px-5 py-2">
                  <div className="flex flex-wrap gap-2">
                    {user.locations.map((location) => (
                      <Tag className="capitalize" key={location + user.id} size="lg" color={location}>
                        {location}
                      </Tag>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-2 text-neutral-500">{user.subscription}</td>
                <td className="px-5 py-2 text-neutral-500">{user.registration}</td>
              </tr>
            );
          }}
        ></Table.Body>
      </Table>
    </div>
  );
}
