import TrendingDown from "../icons/TrendingDown";
import TrendingUp from "../icons/TrendingUp";

export default function StatisticsCard({
  className = "",
  title = "New Users",
  value = 500,
  rate = 11.02,
}: {
  className?: string;
  title?: string;
  value?: number;
  rate?: number;
}) {
  const bgClass =
    rate > 0 ? "bg-statistics-positive" : "bg-statistics-negative";

  return (
    <div
      className={`shadow-statistics flex flex-col justify-between h-32 ${bgClass} px-8 py-5 rounded-3xl text-white ${className}`}
    >
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl">{title}</h2>
        {rate > 0 ? (
          <i className="text-light-green-300">
            <TrendingUp />
          </i>
        ) : (
          <TrendingDown />
        )}
      </div>
      <div className="flex justify-between items-baseline">
        <span className="text-4xl">{value}</span>
        <span className="text-lg font-[500] ">
          {rate > 0 && "+"}
          {rate}%
        </span>
      </div>
    </div>
  );
}
