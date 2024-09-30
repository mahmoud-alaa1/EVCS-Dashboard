import SearchInput from "../../ui/SearchInput";
import Table from "../../ui/Table";

export default function UsersTable({ className }: { className?: string }) {
  return (
    <div className={className}>
      <SearchInput placeholder="Search a customer" className="w-full mb-3" />
      <Table className="text-left rounded-xl  border border-[#C8C8C8] ">
        <Table.Header className=" bg-[#F0F7EA] text-xs font-[500]">
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
// width: Fill (271px)px;
// height: Fixed (38px)px;
// padding: 0px 20px 0px 20px;
// gap: 4px;
// border: 0px 0px 1px 0px;
// opacity: 0px;
