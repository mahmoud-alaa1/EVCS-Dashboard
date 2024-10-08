export default function Card({
  title,
  value,
  unit,
  className="",
}: {
  title?: string;
  value?: number | string;
  unit?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col bg-light-green-100 p-8 rounded-[20px] shadow-statistics text-green-800 ${className}`}
    >
      {title && <h3 className="font-bold text-[20px] ">{title}</h3>}
      <p>
        <span className=" text-4xl font-bold">{value}</span>&nbsp;
        <span className=" text-3xl font-normal">{unit}</span>
      </p>
    </div>
  );
}
