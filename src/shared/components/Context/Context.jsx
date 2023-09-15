import { createContext, useContext, useState } from "react";

const CarListContext = createContext();

export const useCarContext = () => useContext(CarListContext)

const Context = ({children}) => {
  const [carList, setCarList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <CarListContext.Provider
      value={{
        carList: { carListValue: carList, carListFn: setCarList },
        favoriteList: {
          favoriteListValue: favoriteList,
          favoriteListFn: setFavoriteList,
        },
      }}
    >{ children}</CarListContext.Provider>
  );
};

export default Context;
