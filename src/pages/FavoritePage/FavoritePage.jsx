import { useCallback, useEffect, useState } from "react";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import ViewingArea from "../../shared/components/ViewingArea/ViewingArea";
import BaseStyles from "../../styles/base-styles.module.css";
import { useCarContext } from "../../shared/components/Context/Context";
import saveDataToLocalStorage from "../../helpers/saveDataToLocalSrorage";
import CAR_CONSTANT_LIST from "../../helpers/constantsForLocalStorage";
import NoInfoCar from "../../shared/components/NoInfoCar/NoInfoCar";
import NoSidebar from "../../shared/components/NoSidebar/NoSidebar";
import useNavFunc from "../../helpers/navFunc";

const FavoritePage = () => {
  const [selected, setSelected] = useState([]);
  const { favoriteList } = useCarContext();
  const navFunc = useNavFunc();
  navFunc();
  const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.FAVORITE_LIST);

  useEffect(() => {
    if (isInLocal) {
      if (
        favoriteList.favoriteListValue.length !== JSON.parse(isInLocal).length
      ) {
        favoriteList.favoriteListFn(JSON.parse(isInLocal));
      }
    }
  }, [favoriteList, isInLocal]);

  const handleSelect = useCallback((id) => {
    setSelected((prev) => [...prev, id]);
  }, []);

  const handleRemoveFavorite = (id) => {
    const indexToDel = favoriteList.favoriteListValue.findIndex(
      (car) => car.id === id
    );
    if (indexToDel >= 0) {
      const arr = [...favoriteList.favoriteListValue];

      arr.splice(indexToDel, 1);
      saveDataToLocalStorage({
        type: CAR_CONSTANT_LIST.FAVORITE_LIST,
        payload: arr,
      });
      favoriteList.favoriteListFn(arr);
    }
  };

  return (
    <section className={BaseStyles.container}>
      {favoriteList.favoriteListValue.length !== 0 ? (
        <Sidebar
          handleSelect={handleSelect}
          removeFavorite={handleRemoveFavorite}
        />
      ) : (
        <NoSidebar />
      )}
      {selected[selected.length - 1] &&
      favoriteList.favoriteListValue.length !== 0 ? (
        <ViewingArea carId={selected[selected.length - 1]} />
      ) : (
        <NoInfoCar />
      )}
    </section>
  );
};

export default FavoritePage;
