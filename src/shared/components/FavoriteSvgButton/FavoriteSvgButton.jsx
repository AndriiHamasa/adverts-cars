import { useEffect, useState } from "react";
import css from "./FavoriteSvgButton.module.css";
import { useCarContext } from "../Context/Context";
import PropTypes from "prop-types";
import saveDataToLocalStorage from "../../../helpers/saveDataToLocalSrorage";
import CAR_CONSTANT_LIST from "../../../helpers/constantsForLocalStorage";

const findCard = (carId, arr) => {
  const car = arr.find(card => card.id === carId)
  return car
}

const updatedArr = (carId, arr) => {

  const newArr = arr.filter(card => card.id !== carId)
  return newArr
}

const isInFavoriteList = (carId, arr) => {
  const car = arr.find(card => card.id === carId)
  if (car) {
    return true
  }

  return false
}


const FavoriteSvgButton = ({ carId, isFavorite }) => {
  const [isClicked, setIsClicked] = useState(isFavorite);
  const { carList, favoriteList } = useCarContext();

  useEffect(() => {
    if (isClicked && !isInFavoriteList(carId, favoriteList.favoriteListValue)) {
      favoriteList.favoriteListFn(prev => [...prev, findCard(carId, carList.carListValue)])
    }
    if (!isClicked && isInFavoriteList(carId, favoriteList.favoriteListValue)) {
      const arrWithDeletedCard = updatedArr(carId, favoriteList.favoriteListValue)
      favoriteList.favoriteListFn(arrWithDeletedCard)
    }
    
  }, [carId, carList.carListValue, favoriteList, isClicked])

  useEffect(() => {
    saveDataToLocalStorage({
      type: CAR_CONSTANT_LIST.FAVORITE_LIST,
      payload: favoriteList.favoriteListValue,
    })
    
  }, [favoriteList.favoriteListValue, favoriteList.favoriteListValue.length])
  

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonColor = isClicked ? "#3470FF" : "transparent"; 

  return (
    <svg
      className={css.svgItem}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      onClick={handleClick} 
      style={{
        cursor: "pointer",
        fill: buttonColor,
        stroke: isClicked ? buttonColor : "#FFF",
      }} 
    >
      
      <path
        d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z"
        
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FavoriteSvgButton;

FavoriteSvgButton.propTypes = {
  carId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool,
};
