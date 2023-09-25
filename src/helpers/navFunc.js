import { useLocation } from "react-router-dom";
import headerStyles from "../shared/components/Header/Header.module.css";

const useNavFunc = () => {
  const location = useLocation();
  return () => {
    let animatedNav = null;

    const navList = document.querySelectorAll(
      `.${headerStyles.navItemContainer}`
    );
    navList.forEach((nav) =>
      nav.classList.remove(`${headerStyles.navItemContainerIsActive}`)
    );

    if (location.pathname === "/catalog") {
      animatedNav = document.querySelector("#catalog");
    }

    if (location.pathname === "/favorites") {
      animatedNav = document.querySelector("#favorites");
    }

    if (location.pathname === "/") {
      animatedNav = document.querySelector("#home");
    }

    if (animatedNav) {
      animatedNav.classList.add(`${headerStyles.navItemContainerIsActive}`);
    }
  };
};

export default useNavFunc;
