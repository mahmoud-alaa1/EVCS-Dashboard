import CarIcon from "../../../icons/CarIcon";

type TCarProps = {
  make: string;
  model: string;
  color: string;
};

const CarItem = ({ make, model, color }: TCarProps) => {
  return (
    <div className="snap-start flex gap-3 justify-center items-center p-3 border-3 border-green-600 w-52 rounded-2xl flex-shrink-0">
      <span className={`row-span-full text-[#769EE9]`}>
        <CarIcon />
      </span>
      <div className="flex flex-col -space-y-1">
        <p className="text-light-green-900 font-bold">{make}</p>
        <span className="text-sm text-light-green-800">{model}</span>
        <span className="text-xs text-light-green-700">{color}</span>
      </div>
    </div>
  );
};

export default CarItem;
