import { Link } from "react-router-dom";
import BaseStyles from "../../../styles/base-styles.module.css";
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.headSection}>
      <div className={BaseStyles.container}>
        <nav >
          <ul className={css.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;