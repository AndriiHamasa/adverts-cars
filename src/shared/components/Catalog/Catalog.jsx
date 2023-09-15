import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import Button from "../Button/Button";
import css from "./Catalog.module.css";
import { useCarContext } from "../Context/Context";
import saveDataToLocalStorage from "../../../helpers/saveDataToLocalSrorage";
import CAR_CONSTANT_LIST from "../../../helpers/constantsForLocalStorage";
import fetchData from "../../../helpers/fetchData";

const Catalog = () => {
  // const [carList, setCarList] = useState([]);
  const [error, setError] = useState(null)

  const { carList } = useCarContext();

  useEffect(() => {
    // async function carsFetch() {
    //   try {
    //     const response = await instance.get("/adverts");
    //     carList.carListFn(response.data);
    //   } catch (error) {
    //     setError(error);
    //   }
    // }
    async function carFetch() {
      try {
        console.log("fetch")
        const response = await fetchData();
        carList.carListFn(response);
      } catch (error) {
        setError(error)
      }
    }

    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.CAR_LIST);

    if (isInLocal) {
      const dataFromLocalStorage = JSON.parse(isInLocal);

      if (carList.carListValue.length === 0) {
        console.log("local")
        carList.carListFn(dataFromLocalStorage);
      }
    } else if (carList.carListValue.length === 0) {
      carFetch()
    }
  }, [carList]);

  useEffect(() => {
    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.CAR_LIST);

    if (carList.carListValue.length !== 0 && (isInLocal?.length === 0 || !isInLocal)) {
      saveDataToLocalStorage({
        type: CAR_CONSTANT_LIST.CAR_LIST,
        payload: carList.carListValue,
      });
    }
  }, [carList.carListValue]);

  if (error) {
    return <div>Error:( : {error.message}</div>;
  }
  // console.log('carList.carListValue ==>> ', carList.carListValue)
  return (
    <section className={css.catalogSection}>
      {carList.carListValue.length > 0 && (
        <CardList cars={carList.carListValue} />
      )}
      <Button text={"Load more"} type={"btnLoadMore"} />
    </section>
  );
};

export default Catalog;
