import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-291px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
