import { useCallback } from "react";
import { useCarContext } from "../Context/Context";
import css from "./Sidebar.module.css";
import PropTypes from "prop-types";
// import TrashCanIcon from "./trash-can-icon.svg#basket";

const Sidebar = ({ handleSelect, removeFavorite }) => {
  // const [data, setData] = useState([]);
  const { favoriteList } = useCarContext();
  console.log(
    "favoriteList.favoriteListValue in Sidebar",
    favoriteList.favoriteListValue
  );

  // здесь меняется айдишник и сплывает наверх
  const handleClick = useCallback(
    (id) => {
      handleSelect(id);
    },
    [handleSelect]
  );

  return (
    <aside className={css.sidebar}>
      <ul className={css.cardList}>
        {favoriteList.favoriteListValue.map((item) => (
          <li key={item.id} className={css.cardCheck}>
            <button
              className={`${css.cardItem} ${css.cardViewBtn}`}
              onClick={() => handleClick(item.id)}
            >
              {item.make} - {item.model}
            </button>
            <button
              onClick={() => removeFavorite(item.id)}
              className={css.delBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* <TrashCanIcon width={50} height={50} /> Укажите желаемые размеры */}
    </aside>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  handleSelect: PropTypes.func,
  removeFavorite: PropTypes.func,
};
