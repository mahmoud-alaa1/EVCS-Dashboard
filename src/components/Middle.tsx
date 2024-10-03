import CapacityChart from "../ui/CapacityChart";
import Card from "../ui/Card";
import ChargesChart from "../ui/ChargesChart";
import ChartContainer from "../ui/ChartContainer";

export default function Middle() {
  return (
    <div className="flex gap-9 flex-wrap lg:flex-nowrap h-[30rem]">
      <ChartContainer>
        <ChartContainer.Header>
          <ChartContainer.Title>Charges</ChartContainer.Title>
          <ChartContainer.Menu
            className="text-dark"
            items={["Yearly", "Monthly", "Daily"]}
          >
            Yearly
          </ChartContainer.Menu>
        </ChartContainer.Header>

        <ChargesChart />
      </ChartContainer>

      <div className="flex flex-col gap-7 w-[30%] ">
        <ChartContainer>
          <ChartContainer.Header>
            <ChartContainer.Title className="text-xl">
              Van Capacity
            </ChartContainer.Title>
            <ChartContainer.Menu
              className="text-dark"
              items={["Dubai", "Abu Dhabi", "Sharjah"]}
            >
              Dubai
            </ChartContainer.Menu>
          </ChartContainer.Header>

          <CapacityChart />
        </ChartContainer>

        <Card title="Waiting" value={122} unit="Clients" />
      </div>
    </div>
  );
}
