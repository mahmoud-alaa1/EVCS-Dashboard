import { User } from "../../types/types";
import UserDetails from "./Details/UserDetails";
import UsersTable from "./Table/UsersTable";

const data: User[] = [
  {
    name: "David Carter",
    email: "david.carter@emailhub.com",
    locations: ["Umm Al Quwain", "Dubai"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651651",
    phone: "123456789",
    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Amina Khalil",
    email: "amina.khalil@webmail.com",
    locations: ["Dubai"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651652",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Zainab Al-Farsi",
    email: "zainab.farsi@inboxnow.com",
    locations: ["Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651654",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Michael Thompson",
    email: "michael.t@fastmail.com",
    locations: ["Ras Al Khaimah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651655",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Omar Haddad",
    email: "omar.haddad@quickmail.com",
    locations: ["Fujairah", "Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651656",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Sarah Ahmed",
    email: "sarah.ahmed@outlookzone.com",
    locations: ["Ajman"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651657",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@netmail.com",
    locations: ["Ajman"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651658",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@netmail.com",
    locations: ["Ajman"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651659",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Emily Scott",
    email: "emily.scott@epost.com",
    locations: ["Fujairah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651660",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
  {
    name: "Hassan Mansour",
    email: "hassan.mansour@sendit.com",
    locations: ["Sharjah"],
    subscription: "Golden",
    registration: "Sep 28, 2024",
    id: "1565651661",
    phone: "123456789",

    cars: [
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
      { make: "Tesla", model: "Scenic E-tech", color: "red" },
    ],
  },
];

export default function UsersBody() {
  return (
    <div className="flex flex-col 2xl:flex-row gap-3 flex-grow w-full ">
      <UsersTable data={data} className="flex-grow gap-2.5 flex flex-col" />
      <UserDetails
        data={data}
        className="2xl:w-[30%] 2xl:max-w-[450px] flex-grow rounded-xl p-8"
      />
    </div>
  );
}
