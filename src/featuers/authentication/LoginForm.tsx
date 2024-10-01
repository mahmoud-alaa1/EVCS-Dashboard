import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import LoginInput from "../../ui/LoginInput";
import LoginFormRow from "../../ui/LoginFormRow";

// Define the form's input types explicitly
interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm({ className }: { className?: string }) {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInputs>({
    defaultValues: { password: "12345678", email: "test@example.com" },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
    console.log(errors);

    if (errors.email || errors.password) return;

    navigate("/overview");
  };

  function login() {}

  console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`gap-2 flex flex-col ${className}`}
    >
      <LoginFormRow label="Email" error={errors.email?.message}>
        <LoginInput
          id="email"
          type="text"
          error={!!errors?.email?.message}
          placeholder="Enter your email"
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </LoginFormRow>

      <LoginFormRow label="Password" error={errors.password?.message}>
        <LoginInput
          type="password" // Changed from "text" to "password"
          placeholder="Enter your password"
          id="password"
          error={!!errors?.password?.message}
          {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 8,
              message: "Please enter at least 8 characters",
            },
          })}
        />
      </LoginFormRow>

      <Link className="self-end text-[#315313]" to="/forgot-password">
        Forgot your password?
      </Link>

      <Button
        type="submit"
        className="justify-center bg-button-gradient rounded-lg py-3 text-yellow-50"
        onClick={login}
      >
        Login
      </Button>
    </form>
  );
}
