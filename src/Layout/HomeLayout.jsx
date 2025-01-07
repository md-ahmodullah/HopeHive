import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function HomeLayout() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-sm bg-opacity-50 text-black">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-350px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
