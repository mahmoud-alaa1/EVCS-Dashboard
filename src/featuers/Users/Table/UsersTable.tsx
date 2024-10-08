import Table from "../../../ui/Table";
import Button from "../../../ui/Button";
import "./UsersTableStyle.css";
import Pagination from "../../../ui/Pagination";
import Tag from "../../../ui/Tag";
import UnselectedSort from "../../../ui/UnselectedSort";
import DownloadCSV from "./DownloadCSV";
import UsersFilter from "./UsersFilter";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import UsersSearch from "./UsersSearch";
import { useEffect } from "react";
import { TUsersTableProps } from "../../../types/types";

type TProps = TUsersTableProps;

export default function UsersTable({ className, data }: TProps) {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search")?.toLowerCase();
  const filterData = search
    ? data.filter(
        (el) =>
          el.name.toLowerCase().includes(search) ||
          el.email.toLowerCase().includes(search)
      )
    : data;

  function navigateToNewId(newId: string) {
    navigate({
      pathname: `/users/${newId}`,
      search: `?${searchParams.toString()}`,
    });
  }

  useEffect(() => {
    console.log(searchParams);
    return () => {};
  }, [searchParams]);

  return (
    <div className={className}>
      <Pagination />
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

          <Table.Heading className="w-[28.8350%]  px-5 py-3">
            <Button type="button" className="gap-1">
              Location
              <UnselectedSort />
            </Button>
          </Table.Heading>

          <Table.Heading className="w-[20%]  px-5 py-3">
            <Button type="button" className="gap-1">
              Subscription
              <UnselectedSort />
            </Button>
          </Table.Heading>

          <Table.Heading className="w-[20%]  px-5 py-3">
            <Button type="button" className="gap-1">
              Registration
              <UnselectedSort />
            </Button>
          </Table.Heading>
        </Table.Header>

        <Table.Body
          data={filterData}
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
                      <Tag
                        className="capitalize"
                        key={location + user.id}
                        size="lg"
                        color={location}
                      >
                        {location}
                      </Tag>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-2 text-neutral-500">
                  {user.subscription}
                </td>
                <td className="px-5 py-2 text-neutral-500">
                  {user.registration}
                </td>
              </tr>
            );
          }}
        ></Table.Body>
      </Table>
    </div>
  );
}
