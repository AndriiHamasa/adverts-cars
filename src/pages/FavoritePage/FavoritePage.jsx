import { useCallback, useEffect, useState } from "react";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import ViewingArea from "../../shared/components/ViewingArea/ViewingArea";
import BaseStyles from "../../styles/base-styles.module.css";
import { useCarContext } from "../../shared/components/Context/Context";


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


  return (
    <section className={BaseStyles.container}>
      <Sidebar handleSelect={handleSelect} />
      {selected[selected.length - 1] &&
        favoriteList.favoriteListValue.length !== 0 && (
          <ViewingArea carId={selected[selected.length - 1]} />
        )}
    </section>
  );
};

export default FavoritePage;
