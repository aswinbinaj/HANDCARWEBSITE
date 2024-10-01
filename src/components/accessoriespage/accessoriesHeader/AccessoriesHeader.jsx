import React from 'react'
import "../accessoriesHeader/AccessoriesHeader.css"
import handcar_logo from "../../../assets/handcar_logo.svg"
// import heart_icons from "../../assets/heart_icons.svg";
import heart_icons from "../../../assets/heart_icons.svg";
// import shopping_cart from "../../assets/shopping_cart.svg";
import shopping_cart from "../../../assets/shopping_cart.svg";
const AccessoriesHeader = () => {
  return (
    <div className="accessories_header_container">
      <div className="accessories_header_logo">
        <img src={handcar_logo} alt="" srcset="" />
      </div>
      <div className="accessories_headers_contents">
        <input type="text" name="" id="" placeholder='search accessories'/>
        <button>Search</button>
        <img src={heart_icons} alt="" srcset="" />
        <img src={shopping_cart} alt="" srcset="" />
      </div>
    </div>
  )
}

export default AccessoriesHeader
