import TrendingUp from "../icons/TrendingUp";

export default function StatisticsCard({
  className = "",
  title = "Trending Up",
  value = 500,
  rate,
}: {
  className?: string;
  title?: string;
  value?: number;
  rate?: number;
}) {
  return (
    <div className={`bg-statistics-positive ${className}`}>
      <div className="flex justify-between">
        <h2>{title}</h2>
        <TrendingUp />
      </div>
      <div className="flex justify-between">
        <span>{value}</span>
        <span>{rate}</span>
      </div>
    </div>
  );
}
// background: linear-gradient(0deg, var(--Base, #66AD28), var(--Base, #66AD28)),
// linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%);
