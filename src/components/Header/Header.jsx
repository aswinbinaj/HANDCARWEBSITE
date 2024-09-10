import React from "react";
import handcar_logo from "../../assets/handcar_logo.svg";
import heart_icons from "../../assets/heart_icons.svg";
import shopping_cart from "../../assets/shopping_cart.svg";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="navbar">
      <div className="nav_leftside">
        <img src={handcar_logo} alt="logo" srcset="" />
      </div>

      <div className="nav_rightside">
        <ul>
          <li>Home</li>
          <li>Subscribe</li>
          <li>Accessories</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>
            <img src={heart_icons} alt="" srcset="" />
          </li>
          <li>
            <img src={shopping_cart} alt="" srcset="" />
          </li>
          <li>
            <button className="login_btn nav_btn">Login</button>
          </li>
          <li>
            <button className="sign_up_btn nav_btn">Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
