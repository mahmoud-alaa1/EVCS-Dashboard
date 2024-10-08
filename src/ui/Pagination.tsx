import { useSearchParams } from "react-router-dom";
import Button from "./Button";

export default function Pagination({ length }: { length: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const LENGTH = Array.from(
    { length: Math.ceil(length / 10) },
    (_, i) => i + 1
  );
  let page = Number(searchParams.get("page")) || 1;

  const handlePageChange = (change: number) => {

    page = (page + change + LENGTH.length + 1) % (LENGTH.length + 1) || 1;
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex justify-between items-center ">
      <Button
        onClick={() => handlePageChange(-1)}
        type="button"
        className="border border-light-green-700 bg-green-50 rounded-[4px] text-base px-8 py-1.5 "
      >
        Pervious
      </Button>
      <div className="flex gap-0.5">
        {LENGTH.map((_, i) => (
          <Button
            type="button"
            key={i}
            onClick={() => handlePageChange(i + 1 - page)}
            className={`${
              i + 1 == page ? "bg-green-50" : ""
            } rounded-[4px] text-base px-[10px] py-0.5 transition-all`}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <Button
        onClick={() => handlePageChange(1)}
        type="button"
        className="border border-light-green-700 bg-green-50 rounded-[4px] px-4 py-1.5 text-base "
      >
        Next
      </Button>
    </div>
  );
}
