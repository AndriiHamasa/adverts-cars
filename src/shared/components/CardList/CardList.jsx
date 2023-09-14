import CardItem from "../CardItem/CardItem";
import css from "./CardList.module.css"
/* eslint-disable react/prop-types */
const CardList = ({ cars }) => {
  const arrOfCars = []

  cars?.forEach(car => {
    arrOfCars.push(<CardItem key={car.id} data={car} />)
  });
  return <ul className={css.cardList}>{arrOfCars}</ul>
};

export default CardList