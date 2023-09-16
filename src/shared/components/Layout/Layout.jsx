import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import ModalComponent from "../Modal/Modal";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <ModalComponent/> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
