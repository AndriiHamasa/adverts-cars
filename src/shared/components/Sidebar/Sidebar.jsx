import { useCarContext } from "../Context/Context";
import css from "./Sidebar.module.css"
import PropTypes from "prop-types"



const Sidebar = ({handleSelect}) => {

  const { favoriteList } = useCarContext()

  const handleClick = (id) => {
    console.log('кликнул по кнопке', id)
    handleSelect(id)
  }

  const getList = (arr) => {
    const newArr = []
    arr.map(car => {
      console.log(car.id)
      newArr.push(<li key={car.id}><button onClick={() => handleClick(car.id)}>{car.make}, {car.model}</button></li>)
    })
  
    return newArr
  }
  

  return <aside className={css.sidebar}>
    <ul>
      {getList(favoriteList.favoriteListValue)}
    </ul>
  </aside>
};

export default Sidebar;

Sidebar.propTypes = {
  handleSelect: PropTypes.func,
}

