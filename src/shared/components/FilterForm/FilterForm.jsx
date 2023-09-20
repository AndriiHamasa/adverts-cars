import { selectStyles } from "./selectStyles";
import css from "./FilterForm.module.css";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const Input = ({ label, register, registame, classStyle }) => (
  <div>
    <label htmlFor={label} className={css[classStyle]}>
      {label}
      <input
        className={css.inputField}
        id={label}
        {...register(registame)}
      />
    </label>
  </div>
);

// eslint-disable-next-line react/display-name
const SelectForm = forwardRef(
  ({ onChange, onBlur, name, label, options, width }, ref) => (
    <div className={css.inputContainer}>
      {/* <label className={css.labelForm}>{label}</label> */}
      <Select
        styles={selectStyles(width)}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        options={options} // Передайте варианты выбора в компонент react-select
      />
      {/* <select className={css.selectForm} name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      {options.map(obj => <option key={obj.value} value={obj.value}>{ obj.value}</option>)}
      
    </select> */}
    </div>
  )
);

const FilterForm = ({ handleFilter }) => {
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

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // тут стразу вызываем функцию, котора меняет visibleArr в CatalogPage
    handleFilter(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.filterForm}>
      <Controller
        name="make"
        control={control}
        defaultValue="" 
        render={({ field }) => (
          <SelectForm
            name="make"
            label="Car brand"
            options={markOptions}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            width={224}
          />
        )}
      />
      <Controller
        name="rentalPrice"
        control={control}
        defaultValue="" 
        render={({ field }) => (
          <SelectForm
            name="rentalPrice"
            label="Price/ 1 hour"
            options={priceOptions}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            width={125}
          />
        )}
      />
      <div className={css.mileageContainer}>
        <Input
          label="From"
          registame={"mileageFrom"}
          register={register}
          classStyle={"mileageItemLeft"}
        />
        <Input
          label="To"
          registame={"mileageTo"}
          register={register}
          classStyle={"mileageItemRight"}
        />
      </div>

      {errors.exampleRequired && <span>This field is required</span>}

      
      <button className={css.searchForm}>Search</button>
      
    </form>
  );
 
};

export default FilterForm;

FilterForm.propTypes = {
  handleFilter: PropTypes.func,
};
