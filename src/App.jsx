import { Route, Routes } from "react-router-dom"
import Layout from "./shared/components/Layout/Layout"
import HomePage from "./pages/HomePage/HomePage"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import FavoritePage from "./pages/FavoritePage/FavoritePage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="favorites" element={<FavoritePage/>} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="*" element={ <NotFoundPage/>} />
      </Route>
    </Routes>
  )
   
}

export default App
