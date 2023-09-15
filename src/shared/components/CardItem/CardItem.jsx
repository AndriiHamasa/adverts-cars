import { useState } from "react";
import Button from "../Button/Button";
import FavoriteSvgButton from "../FavoriteSvgButton/FavoriteSvgButton";
// import ModalComponent from "../Modal/Modal";
import css from "./CardItem.module.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types

// const Characteristics = ({ arr }) => {
//   const resArr = [];
//   console.log('<div className={css.separator}></div>', <div className={css.separator}></div>)
//   for (let i = 0; i < arr.length; i++) {
//     // console.log('arr[i]', arr[i])
//     if (i + 1 === arr.length) {
//       resArr.push(arr[i]);
//       break;
//     }
//     resArr.push(arr[1], <div className={css.separator}></div>);
//   }

//   // console.log("resArr", resArr)
//   return resArr.join('')
// };

const CardItem = ({ data }) => {
  const { address, rentalCompany, type, make, id, accessories, rentalPrice, img, year } = data;
  // eslint-disable-next-line react/prop-types
  // console.log('data ==>> ', data)
  const adrressArr = address.split(", ");
  const [showModal, setShowModal] = useState(false);

  const characteristicArray = [
    adrressArr[adrressArr.length - 2],
    adrressArr[adrressArr.length - 1],
    rentalCompany,
    type,
    make,
    id,
    accessories[0],
  ];
  // console.log("characteristicArray", characteristicArray);



  const handleOpenModal = () => {
    console.log('CLICK')
    // e.prevenDefault()
    setShowModal(true);
    console.log("showModal", showModal);
  };

  return (
    <li className={css.cardItem}>
      <div>
        <div className={css.imageContainer}>
          <img className={css.imgItem} src={img} alt="" />
          <FavoriteSvgButton carId={id} />
        </div>
        <div className={css.containerTitle}>
          <h3 className={css.nameTitle}>{`${make}, ${year}`}</h3>
          <h3 className={css.priceTitle}>{`${rentalPrice}`}</h3>
        </div>
        <div className={css.containerCharacteristics}>
          {/* <Characteristics arr={characteristicArray} /> */}
          {/* <div className={css.separator}></div> */}
          <p className={css.textCharacteristics}>
            {characteristicArray.join(" ")}
          </p>
        </div>
        <Button
          text={"Learn more"}
          type={"learnMoreBtn"}
          onClick={handleOpenModal}
        />
        {/* <button onClick={handleClick}>Click me</button> */}
        {/* {showModal && <ModalComponent data={data} modalIsOpen={ showModal} />} */}
      </div>
    </li>
  );
};

export default CardItem;

CardItem.propTypes = {
  data: PropTypes.shape(),
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.node,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
