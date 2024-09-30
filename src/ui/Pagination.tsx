import Button from "./Button";

const LENGTH = [1, 2, 3, 4, 5, 6, 7];

export default function Pagination() {
  return (
    <div className="flex justify-between items-center ">
      <Button className="bg-green-50 rounded-[4px] text-base px-4 py-1.5 ">
        Pervious
      </Button>
      <div className="flex gap-0.5">
        {LENGTH.map((_, i) => (
          <Button
            className={`${
              i == 0 ? "bg-green-50" : ""
            } rounded-[4px] text-base px-4 py-1.5`}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <Button className="bg-green-50 rounded-[4px] px-4 py-1.5 text-base ">
        Next
      </Button>
    </div>
  );
}
