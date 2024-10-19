import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Header";

export default function AppLayout() {
  return (
    <div className="bg-dark gap-10 h-screen px-[36px] py-[44px] grid grid-cols-[0.143fr_1fr] transition-none w-fit min-w-full">
      <Sidebar />
      {/* Ensure the white container scrolls inside its boundaries */}
      <div className="overflow-y-scroll  ">
        <div className=" bg-[#FBFBFB] flex flex-col gap-[20px] min-h-screen flex-grow rounded-[30px]  pt-[20px] px-[20px] sm:px-[50px] pb-[61px]  relative">
          <Navbar />
          <main className="flex-grow flex flex-col over ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
