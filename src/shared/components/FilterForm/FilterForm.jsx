import Select from "react-select";
import Button from "../Button/Button";
import { selectStyles } from "./selectStyles";
import css from "./FilterForm.module.css";
// import { useCarContext } from "../Context/Context";
// import { useState } from "react";
// import fetchData from "../../../helpers/fetchData";

const FilterForm = () => {
  // const { carList, favoriteList } = useCarContext();

  // const [carMark, setCarMark] = useState("volvo");
  // const [price, setprice] = useState(50);
  // const [mileageFrom, setMileageFrom] = useState(null);
  // const [mileageTo, setmileageTo] = useState(null);

  // для норм бекенда
  // const takeOnePerItem = (arr) => {
  //   const result = [];

  //   for (const car of arr) {
  //     if (!result.includes(car.make)) {
  //       result.push(car.make);
  //     }
  //   }

  //   return result;
  // }
  // const onePerCar = takeOnePerItem(carList);

  const markOptions = [
    { value: "Volvo", label: "Volvo" },
    { value: "HUMMER", label: "HUMMER" },
    { value: "Subaru", label: "Subaru" },
    { value: "Mitsubishi", label: "Mitsubishi" },
    { value: "Nissan", label: "Nissan" },
    { value: "Lincoln", label: "Lincoln" },
    { value: "GMC", label: "GMC" },
    { value: "Hyundai", label: "Hyundai" },
    { value: "MINI", label: "MINI" },
    { value: "Bentley", label: "Bentley" },
    { value: "Mercedes-Benz", label: "Mercedes-Benz" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "Pontiac", label: "Pontiac" },
    { value: "Lamborghini", label: "Lamborghini" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "Chevrolet", label: "Chevrolet" },
    { value: "Chrysler", label: "Chrysler" },
    { value: "Kia", label: "Kia" },
    { value: "Land Rover", label: "Land Rover" },
  ];

  const priceOptions = [
    { value: 20, label: 20 },
    { value: 30, label: 30 },
    { value: 40, label: 40 },
    { value: 50, label: 50 },
    { value: 60, label: 60 },
    { value: 70, label: 70 },
    { value: 80, label: 80 },
    { value: 90, label: 90 },
  ];

  const handleChangeSelect = (selectedOption) => {
    console.log("selectedOption", selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");  
  };

  return (
    <form className={css.filterForm} onSubmit={handleSubmit}>
      <Select
        placeholder="Enter the text"
        styles={selectStyles(224)}
        options={markOptions}
        onChange={handleChangeSelect}
      />
      <Select options={priceOptions} styles={selectStyles(125)} onChange={handleChangeSelect}/>
      <label>
        From
        <input type="text" />
      </label>
      <label>
        To
        <input type="text" />
      </label>
      <Button text={"Search"} type={"searchBtn"} />
    </form>
  );
};

export default FilterForm;
