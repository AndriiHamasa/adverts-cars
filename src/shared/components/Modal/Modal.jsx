import { useEffect, useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import css from "./Modal.module.css";
import Button from "../Button/Button";
import { useCarContext } from "../Context/Context";

Modal.setAppElement("#modal-root"); 

const CloseBtn = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={css.closeBtnSvg}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 6L6 18"
        stroke="#121417"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#121417"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ModalComponent = () => {
  const { modal } = useCarContext();

  const data = modal.showModal;

  const {
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
  } = data;

  const adrressArr = address.split(", ");

  const characteristicArray = [
    adrressArr[adrressArr.length - 2],
    adrressArr[adrressArr.length - 1],
    `id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Cunsumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const accessoriesAndfunctionalitiesArr = [...accessories, ...functionalities];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setModalIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, [data]);

  const closeModal = () => {
    document.body.style.overflow = "auto";
    modal.setShowModal(null);
    setModalIsOpen(false);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(18, 20, 23, 0.50)",
    },
    content: {
      width: "541px",
      borderRadius: "24px",
      padding: "40px",

      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  const handleRentalCar = () => {
    console.log("Rental car");
  };

  const svg = (
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

  const characteristicsWithSvg = characteristicArray.flatMap((word, index) => {
    return index === characteristicArray.length - 1 ? [word] : [word, svg];
  });
  const functionalitiesWithSvg = accessoriesAndfunctionalitiesArr.flatMap(
    (word, index) => {
      return index === characteristicArray.length - 1 ? [word] : [word, svg];
    }
  );


  return (
    <div className={css.modalContainer}>
      <Modal
        className={css.modalScrollBar}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="modal"
        style={modalStyle}
      >
        <CloseBtn onClick={closeModal} />

        <img src={img} alt="car" className={css.imageItem} />
        <h2 className={css.nameTitle}>
          {`${make} `}
          {model && <span className={css.modelSpan}>{model}, </span>}
          {year}
        </h2>
        <p className={css.textCharacteristics}>
          {characteristicsWithSvg.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <p className={css.textDescription}>{description}</p>
        <h3 className={css.subTitleAccessories}>
          Accessories and functionalities:
        </h3>
        <p className={css.textFunctionalitics}>
          {functionalitiesWithSvg.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <h3 className={css.subTitleConditions}>Rental Conditions: </h3>
        <ul className={css.achivmentList}>
          <li className={css.achivments}>
            Minimum age : <span className={css.achivmentValue}>25</span>
          </li>
          <li className={css.achivments}>Valid driver’s license</li>
          <li className={css.achivments}>Security deposite required </li>
          <li className={css.achivments}>
            Mileage: <span className={css.achivmentValue}>{mileage}</span>
          </li>
          <li className={css.achivments}>
            Price: <span className={css.achivmentValue}>{rentalPrice}</span>
          </li>
          <Button
            text={"Rental car"}
            type={"rentalBtn"}
            onClick={handleRentalCar}
          />
        </ul>
      </Modal>
    </div>
  );
};

export default ModalComponent;

CloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
