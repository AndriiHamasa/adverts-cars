import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import Context from "./shared/components/Context/Context";
import FilterForm from "./shared/components/FilterForm/FilterForm";

// створили дядю
// тепер треба попросити його огорнути все, що потрібно
// Provider - це типу дисплей; value - це те, що показує дисплей

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* element={<OnlyGuest component={<WelcomePage />} />} */}
        {/* <CarListContext.Provider value={CarList}> */}
        <Route
          path="catalog"
          element={
            <Context>
              <CatalogPage />
            </Context>
          }
        />
        <Route
          path="favorites"
          element={
            <Context>
              <FavoritePage />
            </Context>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
