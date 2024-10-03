interface ChartContainerProps {
  children: React.ReactNode;

  title?: string;
  className?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div
      className={`shadow-statistics w-full bg-light-green-100 p-[30px] rounded-3xl h-fit ${className}`}
    >
      {title && (
        <h2 className="mb-5 text-3xl font-semibold text-[#315313]">{title}</h2>
      )}

      {children}
    </div>
  );
};

export default ChartContainer;
