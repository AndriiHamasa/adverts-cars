import Button from "../Button/Button";
import FavoriteSvgButton from "../FavoriteSvgButton/FavoriteSvgButton";
import css from "./CardItem.module.css";
import PropTypes from "prop-types";
import { useCarContext } from "../Context/Context";

const CardItem = ({ data }) => {
  const { modal, favoriteList } = useCarContext();


  const {
    address,
    rentalCompany,
    type,
    make,
    id,
    accessories,
    rentalPrice,
    img,
    year,
  } = data;
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

  

  const handleOpenModal = () => {
    modal.setShowModal(data);
  };


  return (
    <li className={css.cardItem}>
      <div>
        <div className={css.imageContainer}>
          <img className={css.imgItem} src={img} alt="" />
          <FavoriteSvgButton
            carId={id}
            isFavorite={favoriteList.favoriteListValue.some(obj => obj.id === id)}
          />
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
