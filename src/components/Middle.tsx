import CapacityChart from "../ui/CapacityChart";
import Card from "../ui/Card";
import ChargesChart from "../ui/ChargesChart";
import ChartContainer from "../ui/ChartContainer";

export default function Middle() {
  return (
    <div className="grid gap-9 2xl:grid-cols-[3fr_1fr] min-h-[20rem]">
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

      <div className="grid xl:grid-rows-[3fr_1fr] gap-7 ">
        <ChartContainer>
          <ChartContainer.Header>
            <ChartContainer.Title className="text-xl">
              Van Capacity
            </ChartContainer.Title>
            <ChartContainer.Menu
              className="text-dark bg-light-green-200 "
              items={["Dubai", "Abu Dhabi", "Sharjah"]}
            >
              Dubai
            </ChartContainer.Menu>
          </ChartContainer.Header>

          <CapacityChart />
        </ChartContainer>

        <Card className="bg-clients"  title="Waiting" value={122} unit="Clients" />
      </div>
    </div>
  );
}
