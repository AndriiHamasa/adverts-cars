import { useCallback, useEffect, useState } from "react";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import ViewingArea from "../../shared/components/ViewingArea/ViewingArea";
import BaseStyles from "../../styles/base-styles.module.css";
import { useCarContext } from "../../shared/components/Context/Context";
import saveDataToLocalStorage from "../../helpers/saveDataToLocalSrorage";
import CAR_CONSTANT_LIST from "../../helpers/constantsForLocalStorage";

const FavoritePage = () => {
  const [selected, setSelected] = useState([]);
  const { favoriteList } = useCarContext();
  const isInLocal = localStorage.getItem("favoriteList");

  useEffect(() => {
    if (isInLocal) {
      if (
        JSON.parse(isInLocal).length > 0 &&
        favoriteList.favoriteListValue.length === 0
      ) {
        favoriteList.favoriteListFn(JSON.parse(isInLocal));
      }
    }
  }, [favoriteList, isInLocal]);

  const handleSelect = useCallback((id) => {
    setSelected((prev) => [...prev, id]);
  }, []);

  // сохраняем изменения в локал FAVORITE_LIST
  useEffect(() => {
    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.FAVORITE_LIST);
    if (favoriteList.favoriteListValue.length !== JSON.parse(isInLocal).length) {
      console.log('зашли чтобы прям убрать')
      console.log('favoriteList.favoriteListValue', favoriteList.favoriteListValue)
      saveDataToLocalStorage({
        type: CAR_CONSTANT_LIST.FAVORITE_LIST,
        payload: favoriteList.favoriteListValue,
      });
    }
  }, [favoriteList.favoriteListValue]);

  const handleRemoveFavorite = (id) => {
    console.log("id - значит зашли куда нужно", id);
    console.log(
      "favoriteList.favoriteListValue",
      favoriteList.favoriteListValue
    );
    const indexToDel = favoriteList.favoriteListValue.findIndex(
      (car) => car.id === id
    );
    console.log("indexToDel", indexToDel);
    if (indexToDel >= 0) {
      const arr = [...favoriteList.favoriteListValue];
      console.log('favoriteList.favoriteListValue', favoriteList.favoriteListValue[0])
      console.log('arr', arr[0])
      arr.splice(indexToDel, 1);
      console.log("arr", arr)
      favoriteList.favoriteListFn(arr); 
    }
  };

  return (
    <section className={BaseStyles.container}>
      <Sidebar
        handleSelect={handleSelect}
        removeFavorite={handleRemoveFavorite}
      />
      {selected[selected.length - 1] &&
        favoriteList.favoriteListValue.length !== 0 && (
          <ViewingArea carId={selected[selected.length - 1]} />
        )}
    </section>
  );
};

export default FavoritePage;
