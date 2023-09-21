import { useState } from "react";
import Button from "../Button/Button";
import { useCarContext } from "../Context/Context";
import modalCss from "../Modal/Modal.module.css";
import PropTypes from "prop-types";

const ViewingArea = ({ carId }) => {
  const { favoriteList } = useCarContext();

  const getData = (carId) => {
    const obj = favoriteList.favoriteListValue.find((obj) => obj.id === carId);
    return obj;
  };

  if (getData(carId)) {
    console.log("зашли в иф");
    let {
      accessories,
      address,
      description,
      engineSize,
      fuelConsumption,
      functionalities,
      id,
      img,
      make,
      mileage,
      model,
      rentalPrice,
      type,
      year,
    } = getData(carId);

    let adrressArr = address.split(", ");

    let characteristicArray = [
      adrressArr[adrressArr.length - 2],
      adrressArr[adrressArr.length - 1],
      "id:",
      id,
      "Year:",
      year,
      "Type:",
      type,
      "Fuel Cunsumption:",
      fuelConsumption,
      "Engine Size:",
      engineSize,
    ];

    let accessoriesAndfunctionalitiesArr = [...accessories, ...functionalities];

    const handleRentalCar = () => {
      console.log("Rental car");
    };

    return (
      <div className={modalCss.modalContainer} style={{ overflow: "hidden" }}>
        <img src={img} alt="car" className={modalCss.imageItem} />
        <h2 className={modalCss.nameTitle}>
          {`${make} `}
          {model && <span className={modalCss.modelSpan}>{model}, </span>}
          {year}
        </h2>
        <p className={modalCss.textCharacteristics}>
          {characteristicArray.join(" ")}
        </p>
        <p className={modalCss.textDescription}>{description}</p>
        <h3 className={modalCss.subTitleAccessories}>
          Accessories and functionalities:
        </h3>
        <p className={modalCss.textFunctionalitics}>
          {accessoriesAndfunctionalitiesArr.join(" ")}
        </p>
        <h3 className={modalCss.subTitleConditions}>Rental Conditions: </h3>
        <ul className={modalCss.achivmentList}>
          <li className={modalCss.achivments}>
            Minimum age : <span className={modalCss.achivmentValue}>25</span>
          </li>
          <li className={modalCss.achivments}>Valid driver’s license</li>
          <li className={modalCss.achivments}>Security deposite required </li>
          <li className={modalCss.achivments}>
            Mileage: <span className={modalCss.achivmentValue}>{mileage}</span>
          </li>
          <li className={modalCss.achivments}>
            Price:{" "}
            <span className={modalCss.achivmentValue}>{rentalPrice}</span>
          </li>
          <Button
            text={"Rental car"}
            type={"rentalBtn"}
            onClick={handleRentalCar}
          />
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>No information</h2>
    </div>
  );
};

export default ViewingArea;

ViewingArea.propTypes = {
  carId: PropTypes.number.isRequired,
};
