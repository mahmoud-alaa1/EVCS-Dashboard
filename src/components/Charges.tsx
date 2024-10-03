import CapacityChart from "../ui/CapacityChart";
import Card from "../ui/Card";
import ChargesChart from "../ui/ChargesChart";
import ChartContainer from "../ui/ChartContainer";
import DropdownMenu from "../ui/DropdownMenu";

export default function Charges() {
  return (
    <div className="flex gap-9 flex-wrap lg:flex-nowrap h-[30rem]">
      <ChartContainer>
        <ChartContainer.Header>
          <ChartContainer.Title>Charges</ChartContainer.Title>
          <DropdownMenu className="text-dark" items={["Yearly", "Monthly", "Daily"]}>1</DropdownMenu>
        </ChartContainer.Header>

        <ChargesChart />
      </ChartContainer>

      <div className="flex flex-col gap-7 w-[30%] ">
        <ChartContainer>
          <ChartContainer.Header>
            <ChartContainer.Title className="text-xl">Van Capacity</ChartContainer.Title>
          </ChartContainer.Header>

          <CapacityChart />
        </ChartContainer>

        <Card title="Waiting" value={122} unit="Clients" />
      </div>
    </div>
  );
}
