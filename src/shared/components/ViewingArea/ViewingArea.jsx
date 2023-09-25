import Button from "../Button/Button";
import { useCarContext } from "../Context/Context";
import modalCss from "../Modal/Modal.module.css";
import PropTypes from "prop-types";
import NoInfoCar from "../NoInfoCar/NoInfoCar";

const ViewingArea = ({ carId }) => {
  const { favoriteList } = useCarContext();

  const getData = (carId) => {
    const obj = favoriteList.favoriteListValue.find((obj) => obj.id === carId);
    return obj;
  };

  if (getData(carId)) {
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
      `id: ${id}`,

      `Year: ${year}`,

      `Type: ${type}`,

      `Fuel Cunsumption: ${fuelConsumption}`,

      `Engine Size: ${engineSize}`,
    ];

    let accessoriesAndfunctionalitiesArr = [...accessories, ...functionalities];

    let svg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="16"
        viewBox="0 0 2 16"
        fill="none"
      >
        <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1" />
      </svg>
    );
    

    let characteristicsWithSvg = characteristicArray.flatMap((word, index) => {
      return index === characteristicArray.length - 1 ? [word] : [word, svg];
    });
    let functionalitiesWithSvg = accessoriesAndfunctionalitiesArr.flatMap(
      (word, index) => {
        return index === characteristicArray.length - 1 ? [word] : [word, svg];
      }
    );

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
          {characteristicsWithSvg.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <p className={modalCss.textDescription}>{description}</p>
        <h3 className={modalCss.subTitleAccessories}>
          Accessories and functionalities:
        </h3>
        <p className={modalCss.textFunctionalitics}>
          {functionalitiesWithSvg.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
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

  return <NoInfoCar />;
};

export default ViewingArea;

ViewingArea.propTypes = {
  carId: PropTypes.number.isRequired,
};
