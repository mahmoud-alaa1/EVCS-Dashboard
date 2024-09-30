import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Header";

export default function AppLayout() {
  return (
    <div className="bg-background gap-10 min-h-screen p-10 grid grid-cols-[0.143fr_1fr] transition-none w-fit min-w-full ">
      <Sidebar />
      <div className="bg-[#FBFBFB] flex flex-col gap-[29px] flex-grow rounded-[30px] pt-[20px] pr-[50px] pb-[61px] pl-[50px]">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
