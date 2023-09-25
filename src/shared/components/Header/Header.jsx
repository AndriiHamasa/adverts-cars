import { Link } from "react-router-dom";
import BaseStyles from "../../../styles/base-styles.module.css";
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.headSection}>
      <div className={BaseStyles.container}>
        <div className={css.headerContainer}>
        <Link className={css.navItem} to="/">AutoFleet<span className={css.logoSpan}>Leasing</span></Link>
        <nav >
          <ul className={css.navList}>
            <li id="home" className={css.navItemContainer}>
                <Link  className={css.navItem} to="/">Home</Link>
            </li>

            <li id="catalog" className={css.navItemContainer}>
              <Link  className={css.navItem} to="/catalog">Catalog</Link>
            </li>
            <li id="favorites" className={css.navItemContainer}>
              <Link  className={css.navItem} to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav></div>
      </div>
    </header>
  );
};

export default Header;
