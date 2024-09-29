import { TagProps } from "../types/types";

export default function Tag({
  children,
  className = "",
  size = "sm",
}: TagProps) {
  return (
    <span className={`rounded-full w-fit p-tag-${size}  ${className}`}>
      {children}
    </span>
  );
}
