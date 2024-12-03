import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
