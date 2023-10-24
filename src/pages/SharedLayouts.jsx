import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";
const SharedLayouts = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayouts;
