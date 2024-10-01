import SearchInput from "../../../ui/SearchInput";
import Table from "../../../ui/Table";
import Button from "../../../ui/Button";
import "./UsersTableStyle.css";
import { usersDataTypes } from "../../../types/types";
import Pagination from "../../../ui/Pagination";
import Tag from "../../../ui/Tag";
import UnselectedSort from "../../../ui/UnselectedSort";
import DownloadCSV from "./DownloadCSV";
import UsersFilter from "./UsersFilter";

const data: usersDataTypes = [
  {
    name: "David Carter",
    email: "david.carter@emailhub.com",
    locations: ["Umm Al Quwain", "Dubai"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651651",
  },
  {
    name: "Amina Khalil",
    email: "amina.khalil@webmail.com",
    locations: ["Dubai"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651652",
  },
  {
    name: "Zainab Al-Farsi",
    email: "zainab.farsi@inboxnow.com",
    locations: ["Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651654",
  },
  {
    name: "Michael Thompson",
    email: "michael.t@fastmail.com",
    locations: ["Ras Al Khaimah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651655",
  },
  {
    name: "Omar Haddad",
    email: "omar.haddad@quickmail.com",
    locations: ["Fujairah", "Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651656",
  },
  {
    name: "Sarah Ahmed",
    email: "sarah.ahmed@outlookzone.com",
    locations: ["Ajman"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651657",
  },
  {
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@netmail.com",
    locations: ["Ajman"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651658",
  },
  {
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@netmail.com",
    locations: ["Ajman"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651659",
  },
  {
    name: "Emily Scott",
    email: "emily.scott@epost.com",
    locations: ["Fujairah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651660",
  },
  {
    name: "Hassan Mansour",
    email: "hassan.mansour@sendit.com",
    locations: ["Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651661",
  },
];

export default function UsersTable({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Pagination />

      <div className="flex flex-wrap w-full gap-2.5">
        <form className="flex-grow">
          <SearchInput name="search" placeholder="Find a customer..." />
        </form>
        <UsersFilter />
        <DownloadCSV data={data} />
      </div>

      <Table className="min-w-full table-fixed text-left">
        <Table.Header className="text-xs font-[500]">
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
          data={data}
          render={(user, i) => {
            console.log(user);
            return (
              <tr className="" key={user.id}>
                <td className="px-5 py-2">
                  <div>
                    <p className="">{user.name}</p>
                    <p className="text-neutral-500">{user.email}</p>
                  </div>
                </td>
                <td className="px-5 py-2  ">
                  <div className="flex flex-wrap gap-1">
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
