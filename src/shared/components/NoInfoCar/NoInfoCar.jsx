import css from "./NoInfoCar.module.css";

const NoInfoCar = () => {
  return (
    <div className={css.noInfoCarContainer}>
      <h2 className={css.title}>Choose favorite car</h2>
      <img
        className={css.picture}
        src="./src/pictures/no-car.jpg"
        alt="no information about car"
      />
    </div>
  );
};

export default NoInfoCar;
