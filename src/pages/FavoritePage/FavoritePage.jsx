import { useState } from "react";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import ViewingArea from "../../shared/components/ViewingArea/ViewingArea";
import BaseStyles from "../../styles/base-styles.module.css";
import { useCarContext } from "../../shared/components/Context/Context";

const getData = (id, arr) => {
  const car = arr.find((el) => (el.id = id));

  return car;
};

const FavoritePage = () => {
  const [selected, setSelected] = useState(null);
  const { favoriteList } = useCarContext();

  console.log('selected', selected)
  const data = getData(selected, favoriteList.favoriteListValue);

  return (
    <section className={BaseStyles.container}>
      <Sidebar handleSelect={setSelected} />
      {selected && <ViewingArea data={data} />}
    </section>
  );
};

export default FavoritePage;
