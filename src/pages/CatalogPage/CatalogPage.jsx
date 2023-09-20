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

const CatalogPage = () => {
  const [error, setError] = useState(null);
  const [visibleArr, setvisibleArr] = useState([]);
  const { carList, favoriteList } = useCarContext();
  const [page, setPage] = useState(1);

  // здесь, либо делается фетч и закидует в локал, либо берется с локал
  useEffect(() => {
    const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.CAR_LIST);
    const isFavoriteInLocal = localStorage.getItem(CAR_CONSTANT_LIST.FAVORITE_LIST)
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

  // сохраняем изменения в локал CAR_LIST
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

  // сохраняем изменения в локал FAVORITE_LIST
  // useEffect(() => {
  //   const isInLocal = localStorage.getItem(CAR_CONSTANT_LIST.FAVORITE_LIST);
  //   if (favoriteList.favoriteListValue.length !== JSON.parse(isInLocal)) {
  //     saveDataToLocalStorage({
  //       type: CAR_CONSTANT_LIST.FAVORITE_LIST,
  //       payload: favoriteList.favoriteListValue,
  //     })
  //   }
  // },[favoriteList.favoriteListValue])

  
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
      console.log("зашли, чтобы выйти")
      return
    }

    const filteredData = getFilteredData(processedData, carList.carListValue)
    console.log('filteredData уже в CatalogPage, тоесть ответ', filteredData)


    if (filteredData.length !== 0) {
      console.log('ЧАСТО ?')
      setvisibleArr(filteredData)
    }
    

    // if (carList.carListValue.length !== 0) {
    //   const response = getFilteredData(data, carList.carListValue)
    //   setvisibleArr(response)
    // }
    
    
  }

  return (
    <section className={BaseStyles.container}>
      <FilterForm handleFilter={handleFilter} />
      {error && <div>Error:( : {error.message}</div>}
      {visibleArr.length > 0 && (
        <Catalog data={visibleArr} changePage={onLoadMore} />
      )}
    </section>
  );
};

export default CatalogPage;
