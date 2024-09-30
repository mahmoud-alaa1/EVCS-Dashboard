import { TagProps } from "../types/types";
export default function Tag({
  children,
  className = "",
  size = "sm",
}: TagProps) {
  const sizeClass = size === "lg" ? "p-tag-lg" : "p-tag-sm";

  return (
    <span className={`rounded-full w-fit ${sizeClass}  ${className}`}>
      {children}
    </span>
  );
}
