import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:id" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
