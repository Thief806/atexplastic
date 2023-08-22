import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import SupportedAreas from "./components/SupportedAreas/SupportedAreas";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Header from "./components/Header/Header";
import ProductHeader from "./components/Header/ProductHeader";

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
              <SupportedAreas />
              <Products />
              <Reviews />
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
