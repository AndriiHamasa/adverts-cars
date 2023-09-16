import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"

const CarListContext = createContext();

export const useCarContext = () => useContext(CarListContext)

const Context = ({children}) => {
  const [carList, setCarList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [showModal, setShowModal] = useState(null)

  return (
    <CarListContext.Provider
      value={{
        carList: { carListValue: carList, carListFn: setCarList },
        favoriteList: {
          favoriteListValue: favoriteList,
          favoriteListFn: setFavoriteList,
        },
        modal: {
          showModal,
          setShowModal
        },
      }}
    >{ children}</CarListContext.Provider>
  );
};

export default Context;


Context.propTypes = {
  children: PropTypes.any,
}
