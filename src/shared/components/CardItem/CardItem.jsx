import Button from "../Button/Button";
import FavoriteSvgButton from "../FavoriteSvgButton/FavoriteSvgButton";
import css from "./CardItem.module.css";
import PropTypes from "prop-types";
import { useCarContext } from "../Context/Context";
import { useEffect, useRef } from "react";




const CardItem = ({ data }) => {
  const { modal, favoriteList } = useCarContext()
  
  const { address, rentalCompany, type, make, id, accessories, rentalPrice, img, year } = data;
  const adrressArr = address.split(", ");

  const characteristicArray = [
    adrressArr[adrressArr.length - 2],
    adrressArr[adrressArr.length - 1],
    rentalCompany,
    type,
    make,
    id,
    accessories[0],
  ];

  let isClickedBoolRef = useRef(false)
  const isInLocalStorage = localStorage.getItem("favoriteList")
  useEffect(() => {
    if (isInLocalStorage && favoriteList.favoriteListValue.length === 0) {
      console.log('ЗАШЕЛ')
      // console.log('чтото есть в локал')
      // если длина больше нуля, то нужно поместить все в favoriteList тот, что в контексте
      const arrFromLocal = JSON.parse(isInLocalStorage)
      if (arrFromLocal.length > 0) {
        // console.log('должно было закинуться')
        favoriteList.favoriteListFn(arrFromLocal)
        console.log('arrFromLocal', arrFromLocal)
        isClickedBoolRef.current = favoriteList.favoriteListValue.some(car => car.id === id)
      }
      // тут возможно придется закидывать вручную, а может и само сможет
  
      
  
      // if (favoriteList.favoriteListValue.includes(car => car.id === carId)) {
      //   // console.log('есть в локал, ')
      //   setIsClicked(true)
      // }
    }
  }, [favoriteList, id, isInLocalStorage])

  

  
  


  const handleOpenModal = () => {
    modal.setShowModal(data)
  };

  return (
    <li className={css.cardItem}>
      <div>
        <div className={css.imageContainer}>
          <img className={css.imgItem} src={img} alt="" />
          <FavoriteSvgButton carId={id} isClickedBool={isClickedBoolRef.current } />
        </div>
        <div className={css.containerTitle}>
          <h3 className={css.nameTitle}>{`${make}, ${year}`}</h3>
          <h3 className={css.priceTitle}>{`${rentalPrice}`}</h3>
        </div>
        <div className={css.containerCharacteristics}>
          
          <p className={css.textCharacteristics}>
            {characteristicArray.join(" ")}
          </p>
        </div>
        <Button
          text={"Learn more"}
          type={"learnMoreBtn"}
          onClick={handleOpenModal}
        />
        
      </div>
    </li>
  );
};

export default CardItem;

CardItem.propTypes = {
  data: PropTypes.shape(),
};


