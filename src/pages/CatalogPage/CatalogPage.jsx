import { useState, useEffect } from "react";
import Catalog from "../../shared/components/Catalog/Catalog";
import FilterForm from "../../shared/components/FilterForm/FilterForm";
import BaseStyles from "../../styles/base-styles.module.css";
import CAR_CONSTANT_LIST from "../../helpers/constantsForLocalStorage";
import saveDataToLocalStorage from "../../helpers/saveDataToLocalSrorage";
import { useCarContext } from "../../shared/components/Context/Context";
import fetchData from "../../helpers/fetchData";
import takeCardFromArr from "../../helpers/takeCardFromArr";

const CatalogPage = () => {
  const [error, setError] = useState(null);
  const [visibleArr, setvisibleArr] = useState([]);
  const { carList } = useCarContext();
  const [page, setPage] = useState(1);

  // здесь, либо делается фетч и закидует в локал, либо берется с локал
  useEffect(() => {
    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.CAR_LIST);
    async function carFetch() {
      try {
        const response = await fetchData();
        carList.carListFn(response);
        // наверное можно попробівать сразу закинуть в локал
      } catch (error) {
        setError(error);
      }
    }

    if (isInLocal) {
      const dataFromLocalStorage = JSON.parse(isInLocal);

      if (carList.carListValue.length === 0) {
        console.log("local");
        carList.carListFn(dataFromLocalStorage);
      }
    } else if (carList.carListValue.length === 0) {
      carFetch();
    }
  }, [carList]);

  // сохраняем изменения в локал
  useEffect(() => {
    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.CAR_LIST);
    if (
      carList.carListValue.length !== 0 &&
      (isInLocal?.length === 0 || !isInLocal)
    ) {
      saveDataToLocalStorage({
        type: CAR_CONSTANT_LIST.CAR_LIST,
        payload: carList.carListValue,
      });
    }
  }, [carList.carListValue]);

  // здесь доодаем в visibleArr
  useEffect(() => {
    if (
      (carList.carListValue.length !== 0 && visibleArr.length === 0) ||
      (page === 2 && carList.carListValue.length !== visibleArr.length)
    ) {
      setvisibleArr(takeCardFromArr(page, carList.carListValue));
    }
  }, [carList.carListValue, page, visibleArr.length]);

  const onLoadMore = () => {
    setPage(2);
  };

  return (
    <section className={BaseStyles.container}>
      <FilterForm />
      {error && <div>Error:( : {error.message}</div>}
      {visibleArr.length > 0 && (
        <Catalog data={visibleArr} changePage={onLoadMore} />
      )}
    </section>
  );
};

export default CatalogPage;
