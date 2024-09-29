import { useLocation } from "react-router-dom";
import { processPathName } from "../lib/utils/helpers";

function Path() {
  let { pathname } = useLocation();
  pathname = processPathName(pathname);
  return (
    <div>
      <span className="opacity-50">Dashboard &nbsp;/&nbsp; </span>
      {pathname}
    </div>
  );
}

export default Path;
