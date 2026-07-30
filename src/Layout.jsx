import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#2E3B31]">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;