import { ButtonTypes } from "../types/types";

export default function Button({ children, onClick, className }: ButtonTypes) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
