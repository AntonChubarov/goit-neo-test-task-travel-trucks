import CatalogFilters from "../../components/CatalogFilters/CatalogFilters.jsx";
import TruckList from "../../components/TruckList/TruckList.jsx";

import styles from "./Catalog.module.css";

const CatalogPage = () => {
    return (
        <div className={styles.container}>
            <CatalogFilters />
            <TruckList />
        </div>
    )
}

export default CatalogPage;
