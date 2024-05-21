import { Header } from "@/components/header/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main className="flex-1 p-4 md:p-6  bg-[#F5F7FA]">
        <Outlet />
      </main>
    </div>
  );
}
