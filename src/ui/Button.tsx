import { ButtonTypes } from "../types/types";

export default function Button({
  type,
  children,
  onClick,
  className,
}: ButtonTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center ${className}`}
    >
      {children}
    </button>
  );
}
