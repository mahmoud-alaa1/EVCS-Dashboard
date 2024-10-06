import Middle from "../components/Middle";
import Statistics from "../components/Statistics";

export default function Overview() {
  return (
    <div className="flex flex-col gap-8">
      <Statistics />
      <Middle />
    </div>
  );
}
