import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubscriptionPage from "./pages/SubscriptionPage";

import ErrorPage from "./pages/ErrorPage";
import SparePartsPage from "./pages/SparePartsPage";
import ServicePage from "./pages/ServicePage";
import AccessoriesPage from "./pages/AccessoriesPage";
import AccessoriesShippings from "./components/accessoriespage/accessoriesShipping/AccessoriesShippings";
// import AccessoriesShipping from "./components/accessoriespage/accessoriesShipping/AccessoriesShipping";

const App = () => {
  return (
    <div>
      {/* <Header  />
      <HomePage />
      <Footer/>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/spareparts" element={<SparePartsPage />} />
          <Route path="/servicepage" element={<ServicePage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/shipping" element={<AccessoriesShippings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
