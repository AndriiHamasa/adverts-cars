// styles for select-react
export const selectStyles = (width) => ({
  singleValue: (styles) => ({
    //Init value
    ...styles,
    color: "#121417",
  }),

  control: (styles, { isSelected }) => ({
    ...styles,
    display: "flex",
    color: isSelected ? "#F3F3F3" : "rgba(243, 243, 243, 0.40)",
    backgroundColor: "#F7F7FB",
    width: width || "224px",
    height: "48px",

    outline: "none",
    borderWidth: "1px",
    borderRadius: "14px",

    paddingLeft: "18px",
    paddingRight: "18px",
    fontSize: "18px",
    fontWeight: "400",
    

    border: "none", // Убираем border
    boxShadow: "none", // Убираем boxShadow, если есть

    // "@media only screen and (min-width: 768px)": {
    //   ...styles["@media only screen and (min-width: 768px)"],
    //   width: "199px",
    //   height: "56px",
    // },
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "FFF",
    color: isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
    fontFamily: "Manrope, sans-serif",
    fontWeight: "400",
    cursor: "pointer",
    lineHeight: "18px",

    // color: "rgba(18, 20, 23, 0.20)",
    // font-family: Manrope;
    fontSize: "16px",
    // font-style: normal;
    // eslint-disable-next-line no-dupe-keys
    fontWeight: 500,
    // eslint-disable-next-line no-dupe-keys
    lineHeight: 1.25,
  }),
  menu: (styles) => ({
    ...styles,
    paddingBottom: "14px",
    paddingLeft: "18px",
    paddingRight: "8px",
    paddingTop: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",

    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    borderRadius: "14px",
    backgroundColor: "#FFF",
  }),
  menuList: (provided) => ({
    ...provided,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    boxSizing: "content-box",
  }),
  indicatorSeparator: () => ({
    display: "none", // Скрываем разделитель
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: 0, // Убираем паддинги
  }),
});

// export const selectStylesIngredients = {
//   singleValue: (styles) => ({
//     //Init value
//     ...styles,
//     color: "#F3F3F3",
//   }),

//   control: (styles, { isSelected }) => ({
//     ...styles,
//     display: "flex",
//     color: isSelected ? "#F3F3F3" : "rgba(243, 243, 243, 0.40)",
//     backgroundColor: "#161f37",
//     width: "100%",

//     outline: "none",
//     borderWidth: "1px",
//     borderRadius: "60px",

//     paddingLeft: "24px",
//     paddingRight: "24px",
//     fontSize: "17px",
//     fontWeight: "400",
//     height: "54px",

//     border: "none", // Убираем border
//     boxShadow: "none", // Убираем boxShadow, если есть

//     "@media only screen and (min-width: 768px)": {
//       ...styles["@media only screen and (min-width: 768px)"],
//       width: "199px",
//       height: "56px",
//     },
//   }),
//   option: (styles, { isFocused }) => ({
//     ...styles,
//     backgroundColor: "#161f37",
//     color: isFocused ? "#F3F3F3" : "rgba(243, 243, 243, 0.40)",
//     fontFamily: "Manrope, sans-serif",
//     fontWeight: "400",
//     cursor: "pointer",
//     lineHeight: "18px",
//   }),
//   menu: (styles) => ({
//     ...styles,

//     paddingBottom: "14px",
//     paddingLeft: "23px",
//     paddingRight: "8px",
//     paddingTop: "14px",

//     borderRadius: "20px",
//     backgroundColor: "#161F37",
//   }),
//   menuList: (provided) => ({
//     ...provided,

//     boxSizing: "content-box",
//     "&::-webkit-scrollbar": {
//       width: "8px",
//       height: "110px",
//       position: "relative", // Абсолютное позиционирование
//       right: "8px", // Отступ с правой стороны
//       top: 0, // Верхний отступ
//     },
//     "&::-webkit-scrollbar-thumb": {
//       borderRadius: "20px",
//       background: "#434D67",
//     },
//   }),
//   indicatorSeparator: () => ({
//     display: "none", // Скрываем разделитель
//   }),
//   dropdownIndicator: (styles) => ({
//     ...styles,
//     padding: 0, // Убираем паддинги
//   }),
// };
