import Charges from "../components/Charges";
import Statistics from "../components/Statistics";

export default function Overview() {
  return (
    <div className="flex flex-col gap-8">
      <Statistics />
      <Charges />
    </div>
  );
}
