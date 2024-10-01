import { InputTypes } from "../types/types";

export default function Input({
  type = "text",
  placeholder,
  name,
  id,
  className,
  ...props
}: InputTypes) {
  return (
    <input
      {...props}
      placeholder={placeholder}
      name={name}
      id={id}
      type={type}
      className={`${className}`}
    />
  );
}
