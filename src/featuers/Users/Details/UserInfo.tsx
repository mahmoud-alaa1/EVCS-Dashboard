import { User } from "../../../types/types";

type TProps = {
  data: User;
};

const UserInfo = ({ data }: TProps) => {
  const { cars, id, ...userData } = data;
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(userData).map(([key, value], index) => (
        <div key={index}>
          <p className="text-light-green-700 capitalize">{key}</p>
          <p className="text-light-green-900 text-sm">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
