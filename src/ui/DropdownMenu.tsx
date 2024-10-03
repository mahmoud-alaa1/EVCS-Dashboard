import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

type dropdownMenuTypes = {
  className?: string;
  items?: string[];
  render?: (option: string) => JSX.Element | null;
  children: React.ReactNode;
};

export default function DropdownMenu({
  className = "",
  items,
  render,
  children,
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
      {children}
      <ul
        className={`absolute transition-all origin-top overflow-hidden z-10 translate-y-1 rounded-xl w-max ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {items?.map(render ?? ((option) => <li>{option}</li>))}
      </ul>
    </div>
  );
}
