import { useEffect, useState } from "react";
import instance from "../../api/instance";
import CardList from "../CardList/CardList";
import Button from "../Button/Button";
import css from "./Catalog.module.css"

const Catalog = () => {
  const [carList, setCarList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carsFetch() {
      try {
        const response = await instance.get("/adverts");
        setCarList(response.data);
      } catch (error) {
        setError(error);
      }
    }

    carsFetch();
  }, []);

  if (error) {
    return <div>Error:( : {error.message}</div>;
  }
  return (
    <section className={css.catalogSection}>
      {carList.length > 0 && <CardList cars={carList} />}
      <Button text={"Load more"} type={"btnLoadMore"} />
      
    </section>
  );
};

export default Catalog;
