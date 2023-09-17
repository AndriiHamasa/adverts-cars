import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import css from "./Layout.module.css"
// import Footer from "../Footer/Footer";
// import ModalComponent from "../Modal/Modal";

const Layout = () => {
  return (
    <div className={css.layoutCover}>
      <Header />
      <Outlet />
      {/* <ModalComponent/> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
