import Card from "../ui/Card";
import ChargesChart from "../ui/ChargesChart";
import ChartContainer from "../ui/ChartContainer";

export default function Charges() {
  return (
    <div className="flex gap-9 flex-wrap lg:flex-nowrap">
      <ChartContainer className="flex-grow" title="Charges">
        <ChargesChart />
      </ChartContainer>
      <div className="flex flex-col gap-7 w-max">
        <ChartContainer title="Vans Capacity" className="flex-grow">
          <div>1</div>
        </ChartContainer>
        <Card title="Waiting" value={122} unit="Clients" />
      </div>
    </div>
  );
}
