import { useState, useEffect } from "react";
import Catalog from "../../shared/components/Catalog/Catalog";
import FilterForm from "../../shared/components/FilterForm/FilterForm";
import BaseStyles from "../../styles/base-styles.module.css";
import CAR_CONSTANT_LIST from "../../helpers/constantsForLocalStorage";
import saveDataToLocalStorage from "../../helpers/saveDataToLocalSrorage";
import { useCarContext } from "../../shared/components/Context/Context";
import fetchData from "../../helpers/fetchData";
import takeCardFromArr from "../../helpers/takeCardFromArr";
import getFilteredData from "../../helpers/getFilteredData";
import ScrollToTopButton from "../../shared/components/ScrollToTopButton/ScrollToTopButton";
import useNavFunc from "../../helpers/navFunc";

const CatalogPage = () => {
  const [error, setError] = useState(null);
  const [visibleArr, setvisibleArr] = useState([]);
  const { carList, favoriteList } = useCarContext();
  const [page, setPage] = useState(1);

  const navFunc = useNavFunc()
  navFunc()

  useEffect(() => {
    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.CAR_LIST);
    const isFavoriteInLocal = localStorage.getItem(CAR_CONSTANT_LIST.FAVORITE_LIST)
    async function carFetch() {
      try {
        const response = await fetchData();
        carList.carListFn(response);
      } catch (error) {
        setError(error);
      }
    }

    if (isInLocal) {
      const dataFromLocalStorage = JSON.parse(isInLocal);

      if (carList.carListValue.length === 0) {
        carList.carListFn(dataFromLocalStorage);
      }
    } else if (carList.carListValue.length === 0) {
      carFetch();
    }

    if (isFavoriteInLocal) {
      const dataFromLocalStorage = JSON.parse(isFavoriteInLocal);

      if (favoriteList.favoriteListValue.length === 0 && dataFromLocalStorage.length !== 0) {
        favoriteList.favoriteListFn(dataFromLocalStorage)
      }
    }
  }, [carList, favoriteList]);

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

  const handleFilter = (data) => {
    const processedData = []
   

    for (const key in data) {
      
      if (Object.hasOwnProperty.call(data, key)) {
        const filterProperty = data[key];
        if (typeof filterProperty === 'object') {
          if (filterProperty?.value) {
            if (key === "rentalPrice") {
              processedData.push({ [key]: `$${filterProperty.value}` })
              continue
            }
            processedData.push({[key]: filterProperty.value})
          }
        }

        if (filterProperty && typeof filterProperty !== "object") {
          processedData.push({[key]: filterProperty})
        }
      }
    }

    if (processedData.length === 0) {
      return
    }

    const filteredData = getFilteredData(processedData, carList.carListValue)


    if (filteredData.length !== 0) {
      setPage(1)
      setvisibleArr(filteredData)
    }
  }

  return (
    <section className={BaseStyles.container}>
      <FilterForm handleFilter={handleFilter} />
      {error && <div>Error:( : {error.message}</div>}
      {visibleArr.length > 0 && (
        <Catalog data={visibleArr} changePage={onLoadMore} />
      )}
      <ScrollToTopButton/>
    </section>
  );
};

export default CatalogPage;
