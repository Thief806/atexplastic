import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SupportedAreas from "./components/SupportedAreas/SupportedAreas";
import Reviews from "./components/Reviews/Reviews";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Header from "./components/Header/Header";
import ProductHeader from "./components/Header/ProductHeader";
import CustomProduct from "./components/CustomProduct/CustomProduct";
import CategorySegment from "./components/ProductCategories/Categories";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Hero />
              {/* <SupportedAreas /> */}
              <CategorySegment />
              <CustomProduct />
              <Reviews />
            </>
          }
        />

        <Route
          path="/:categoryName"
          element={
            <>
              <ProductHeader />
              <Products />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <ProductHeader />
              <ProductDetail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
