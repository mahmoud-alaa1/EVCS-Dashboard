import { InputTypes } from "../types/types";
import { forwardRef } from "react";

const LoginInput = forwardRef<HTMLInputElement, InputTypes>(
  (
    { type = "text", placeholder, name, id, className, error, ...props },
    ref
  ) => {
    return (
      <input
        {...props}
        ref={ref}
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        className={`${error? "border-2 border-red-500":""} bg-[#66AD282B] outline-none text-[#2f4f12] p-5 rounded-[10px] placeholder:text-[#2E4F1259] ${className} transition-all`}
      />
    );
  }
);

export default LoginInput;
