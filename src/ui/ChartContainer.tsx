import React from "react";

interface ChartProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

function ChartContainer({ className = "", children }: ChartProps) {
  return (
    <div
      className={`shadow-statistics w-full bg-light-green-100 p-[30px] flex flex-col h-full  rounded-3xl font-inter gap-4 ${className}`}
    >
      {children}
    </div>
  );
}

function Header({ children }: ChartProps) {
  return <div className="flex justify-between">{children}</div>;
}

function Title({ children, className }: ChartProps) {
  return (
    <h2
      className={`text-3xl font-semibold text-[#315313] font-quicksand ${className}`}
    >
      {children}
    </h2>
  );
}

ChartContainer.Header = Header;
ChartContainer.Title = Title;

export default ChartContainer;
