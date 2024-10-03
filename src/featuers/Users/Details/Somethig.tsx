import { useParams } from "react-router-dom";

export default function Somethig({ className }: { className?: string }) {
  const { userId } = useParams();

  return (
    <div className={` bg-light-green-300 ${className}`}>
      {userId
        ? `User: ${userId}`
        : "Select User from table to show his details"}
    </div>
  );
}
