import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="categories/:id" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
