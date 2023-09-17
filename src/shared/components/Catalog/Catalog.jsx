
import CardList from "../CardList/CardList";
import Button from "../Button/Button";
import css from "./Catalog.module.css";
import ModalComponent from "../Modal/Modal";
// import { useState } from "react";
import { useCarContext } from "../Context/Context";
import PropTypes from "prop-types"

const Catalog = ({data, changePage}) => {
  const { carList, modal } = useCarContext()
 

  const handleClickLoadMore = () => {
    console.log('Кликнули')
    changePage()
    // setPage(page + 1)
  }

  
  return (
    <section className={css.catalogSection}>
      {data.length > 0 && (
        <CardList cars={data} />
      )}
      {data.length !== carList.carListValue.length && <Button text={"Load more"} type={"btnLoadMore"} onClick={handleClickLoadMore} />}
      {modal.showModal && <ModalComponent />}
    </section>
  );
};

export default Catalog;

Catalog.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  changePage: PropTypes.func,
};
