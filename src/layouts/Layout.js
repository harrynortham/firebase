import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Use Outlet to render child route elements
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
