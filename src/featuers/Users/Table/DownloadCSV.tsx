import { downloadCSV } from "../../../lib/utils/helpers";
import { usersDataTypes } from "../../../types/types";
import Button from "../../../ui/Button";

export default function DownloadCSV({ data }: { data: usersDataTypes }) {
  return (
    <Button
      type="button"
      onClick={() => downloadCSV(data)}
      className="transition-colors px-[30px] py-2.5 rounded-[10px] bg-green-500  items-center text-green-50 gap-0.5 hover:bg-green-400"
    >
      Export CSV
    </Button>
  );
}
