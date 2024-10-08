import Bottom from "../components/Bottom";
import Middle from "../components/Middle";
import Statistics from "../components/Statistics";

export default function Overview() {
  return (
    <div className="flex flex-col gap-9">
      <Statistics />
      <Middle />
      <Bottom />
    </div>
  );
}
