import SearchInput from "../../ui/SearchInput";
import Table from "../../ui/Table";
// import "./UsersTableStyle.css";
export default function UsersTable({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SearchInput placeholder="Find a customer..." className="w-full mb-3" />
      <Table className="text-left">
        <Table.Header className="  text-xs font-[500]">
          <Table.Heading className="w-[31%] px-5 py-3">Name</Table.Heading>
          <Table.Heading className="w-[28.8%]  px-5 py-3">
            Location
          </Table.Heading>
          <Table.Heading className="w-[20%]  px-5 py-3">
            Subscription
          </Table.Heading>
          <Table.Heading className="px-5 py-3">Registration</Table.Heading>
        </Table.Header>
        <Table.Body></Table.Body>
      </Table>
    </div>
  );
}
