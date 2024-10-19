import { useParams } from "react-router-dom";
import { Car, TUsersTableProps } from "../../../types/types";
import CarItem from "./CarItem";
import UserInfo from "./UserInfo";
import ChargeLog from "./ChargeLog";

type TProps = TUsersTableProps;
export default function UserDetails({ className, data }: TProps) {
  const { userId } = useParams();

  const userData = data.find((user) => user.id === userId) ?? {
    id: '',
    name: '',
    email: '',
    locations: [],
    cars: [],
    subscription: '',
    registration: '',
    phone: '',
  };

  const { cars } = userData;
  return (
    <div className={` bg-light-green-300 ${className}`}>
      {!userId ? (
        <p>Select user to show his info</p>
      ) : (
        <>
          <h2 className="text-light-green-800 font-bold text-2xl mb-4">Cars</h2>
          <div className="flex gap-4 overflow-x-auto py-3 mb-8 snap-x snap-mandatory">
            {cars.map((car: Car, index: number) => (
              <CarItem key={index} {...car} />
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-light-green-800 font-bold text-2xl mb-4">Information</h2>
            <UserInfo data={userData} />
          </div>
          <div>
            <h2 className="text-light-green-800 font-bold text-2xl mb-4">Charges Log</h2>
            <ChargeLog />
          </div>
        </>
      )}
    </div>
  );
}
