import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SubscriptionPage from "./pages/SubscriptionPage";

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
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
