import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ArrowHeadDown from "../icons/ArrowHeadDown";
import { dropdownMenuTypes } from "../types/types";

export default function DropdownMenu({
  className = "",
  items,
  render,
  children,
  arrow = false,
}: dropdownMenuTypes) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <div
      onClick={() => setOpen(!open)}
      ref={ref}
      className={`relative ${className}`}
    >
      <div className="flex items-baseline">
        {children}
        {arrow && (
          <span
            className={`ml-2 rotate-0 transition-all ${
              open ? "rotate-180" : ""
            }`}
          >
            <ArrowHeadDown />
          </span>
        )}
      </div>
      <ul
        className={`absolute transition-all origin-top overflow-hidden z-10 translate-y-1 rounded-xl w-max ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {items?.map(render ?? ((option) => <li className="p-1">{option}</li>))}
      </ul>
    </div>
  );
}
