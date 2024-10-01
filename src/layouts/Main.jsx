import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <div className="min-h-[calc(100vh-291px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
