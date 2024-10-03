import { useLocation } from "react-router-dom";
import { processPathName } from "../lib/utils/helpers";

function Path() {
  const { pathname } = useLocation();
  const paths = processPathName(pathname);
  return (
    <div>
      <span className="opacity-50">Dashboard &nbsp;/&nbsp; </span>
      {paths.map((path, index) => (
        <span key={path} className="">
          {path} {index == paths.length - 1 ? "" : "  /  "}
        </span>
      ))}
    </div>
  );
}

export default Path;
