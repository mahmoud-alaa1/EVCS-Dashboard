import ChartContainer from "../ui/ChartContainer";
import HoursChart from "./HoursChart";
import TrafficChart from "./TrafficChart";
export default function Bottom() {
  return (
    <div className="grid gap-9 2xl:grid-cols-[1fr_1fr] min-h-[20rem]">
      <ChartContainer>
        <ChartContainer.Header>
          <ChartContainer.Title>Traffic By City</ChartContainer.Title>
          <ChartContainer.Menu
            className="text-dark "
            items={["August", "Septemper", "October"]}
          >
            August
          </ChartContainer.Menu>
        </ChartContainer.Header>

        <TrafficChart />
      </ChartContainer>

      <ChartContainer>
        <ChartContainer.Header>
          <ChartContainer.Title className="text-xl">
            Hours Usage
          </ChartContainer.Title>
          <ChartContainer.Menu
            className="text-dark"
            items={["Dubai", "Abu Dhabi", "Sharjah"]}
          >
            Dubai
          </ChartContainer.Menu>
        </ChartContainer.Header>

        <HoursChart />
      </ChartContainer>
    </div>
  );
}
