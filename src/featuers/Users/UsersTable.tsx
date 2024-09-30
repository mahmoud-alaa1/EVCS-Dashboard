import FilterIcon from "../../icons/FilterIcon";
import SearchInput from "../../ui/SearchInput";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import "./UsersTableStyle.css";
import { usersDataTypes } from "../../types/types";
// import Tag from "../../ui/Tag";
import Pagination from "../../ui/Pagination";

const data: usersDataTypes = [
  {
    name: "David Carter",
    email: "david.carter@emailhub.com",
    locations: ["Umm Al Quwain", "Sharjah", "Umm Al Quwain", "Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
  },
];

export default function UsersTable({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap w-full gap-2.5">
        <form className="flex-grow">
          <SearchInput placeholder="Find a customer..." />
        </form>
        <Button className="px-5 py-2.5 rounded-[10px] bg-green-50 border border-green-200 flex items-center text-green-800 gap-0.5">
          <FilterIcon />
          Filter
        </Button>
        <Button className="px-[30px] py-2.5 rounded-[10px] bg-green-500  items-center text-green-50 gap-0.5">
          Export CSV
        </Button>
      </div>

      <Pagination />

      <Table className="text-left">
        <Table.Header className="  text-xs font-[500]">
          <Table.Heading className="w-[31.2572%] px-5 py-3">Name</Table.Heading>
          <Table.Heading className="w-[28.8350%]  px-5 py-3">
            Location
          </Table.Heading>
          <Table.Heading className="w-[20%]  px-5 py-3">
            Subscription
          </Table.Heading>
          <Table.Heading className="w-[20%]  px-5 py-3">
            Registration
          </Table.Heading>
        </Table.Header>
        <Table.Body></Table.Body>
      </Table>
    </div>
  );
}

// total = 867px
// first col=271px
// second col=250px
// third col=173px
