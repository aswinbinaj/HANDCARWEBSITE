import React, { useState } from "react";
import "../accessoriesHeader/AccessoriesHeader.css";
import handcar_logo from "../../../assets/handcar_logo.svg";
import heart_icons from "../../../assets/heart_icons.svg";
import shopping_cart from "../../../assets/shopping_cart.svg";

import { CgAddR } from "react-icons/cg";

const AccessoriesHeader = () => {
  return (
    <div className="accessories_header_container">
      <div className="accessories_navbar">
        <div className="accessories_navbar_logo">
          <img src={handcar_logo} alt="Handcar Logo" />
        </div>
        <div className="accessories_navbar_icons">
          <input type="text" placeholder="search accessories" />
          <button>Search</button>
          <img src={heart_icons} alt="Heart Icons" />
          <img src={shopping_cart} alt="Shopping Cart" />
        </div>
      </div>
      {/* <div className="accessories_sidebar"></div> */}
    </div>
  );
};

export default AccessoriesHeader;
