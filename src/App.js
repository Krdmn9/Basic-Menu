import React from "react";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasketProvider } from "./components/BasketContext";
import BasketPage from "./components/BasketPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <BasketProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/product/:name" element={<ProductPage />} />
          </Routes>
        </BasketProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
