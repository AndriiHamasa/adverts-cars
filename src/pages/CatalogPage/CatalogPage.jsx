import Catalog from "../../shared/components/Catalog/Catalog"
import FilterForm from "../../shared/components/FilterForm/FilterForm"
import BaseStyles from "../../styles/base-styles.module.css"

const CatalogPage = () => {

    

    return <section className={BaseStyles.container}>
        <FilterForm />
        <Catalog/>
    </section>
}

export default CatalogPage