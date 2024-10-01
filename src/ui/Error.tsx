export default function Error({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <p className={`text-red-500 text-base ${className}`}>{children}</p>;
}
