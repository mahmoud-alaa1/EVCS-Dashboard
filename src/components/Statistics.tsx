import StatisticsCard from "../ui/StatisticsCard";

export default function Statistics() {
  return (
    <div className="grid gap-6 grid-cols-statistics">
      <StatisticsCard rate={11.02} className="" />
      <StatisticsCard rate={-2.02} className="" />
      <StatisticsCard rate={54.02} className="" />
    </div>
  );
}
