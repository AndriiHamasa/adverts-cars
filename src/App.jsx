import { Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import Context from "./shared/components/Context/Context";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
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
