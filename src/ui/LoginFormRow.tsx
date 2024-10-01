import Error from "./Error";

type LoginFormRowProps = {
  label: string;
  error?: string;
  children: React.ReactElement;
};

export default function LoginFormRow({
  label,
  error,
  children,
}: LoginFormRowProps) {
  console.log(error);

  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#686868D9]" htmlFor={children.props.id}>
        {label}
      </label>
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}
