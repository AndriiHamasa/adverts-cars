import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import Button from "../Button/Button";
import css from "./Catalog.module.css";
import { useCarContext } from "../Context/Context";
import saveDataToLocalStorage from "../../../helpers/saveDataToLocalSrorage";
import CAR_CONSTANT_LIST from "../../../helpers/constantsForLocalStorage";
import fetchData from "../../../helpers/fetchData";
import takeCardFromArr from "../../../helpers/takeCardFromArr";
import ModalComponent from "../Modal/Modal";

const Catalog = () => {
  // const [carList, setCarList] = useState([]);
  const [error, setError] = useState(null)
  const [visibleArr, setVisibleArr] = useState([])
  const [page, setPage] = useState(1)

  

  const { carList, modal } = useCarContext();


  useEffect(() => {
    async function carFetch() {
      try {
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

  useEffect(() => {
    setVisibleArr(takeCardFromArr(page, carList.carListValue))
  }, [carList.carListValue, page])

  const handleClickLoadMore = () => {
    setPage(page + 1)
  }

  if (error) {
    return <div>Error:( : {error.message}</div>;
  }
  return (
    <section className={css.catalogSection}>
      {visibleArr?.length > 0 && (
        <CardList cars={visibleArr} />
      )}
      {visibleArr.length !== carList.carListValue.length && <Button text={"Load more"} type={"btnLoadMore"} onClick={handleClickLoadMore} />}
      {modal.showModal && <ModalComponent />}
    </section>
  );
};

export default Catalog;
