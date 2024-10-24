import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import handcar_logo from "../../assets/handcar_logo.svg";
import heart_icons from "../../assets/heart_icons.svg";
import shopping_cart from "../../assets/shopping_cart.svg";
import "../Header/Header.css";
import LoginPage from "../loginpage/LoginPage.jsx";
import ProfileDropdown from "../Header/ProfileDropDown.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLoginClick = () => setShowLoginPage(true);
  const handleCloseLoginPage = () => setShowLoginPage(false);

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setShowLoginPage(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav_leftside">
          <img src={handcar_logo} alt="logo" className="logo" />
        </div>

        <div className="nav_rightside">
          {!isMobile && (
            <>
              <ul className="nav_menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/subscription">Subscribe</Link></li>
                <li><Link to="/accessories">Accessories</Link></li>
                <li><a href="#">About us</a></li>
                <li><Link to="/contactform">Contact us</Link></li>
              </ul>
              <div className="nav_icons">
                <img src={heart_icons} alt="Favorites" className="icon" />
                <img src={shopping_cart} alt="Cart" className="icon" />
                {isLoggedIn && (
                  <ProfileDropdown user={user} onLogout={handleLogout} />
                )}
              </div>
              {!isLoggedIn ? (
                <div className="nav_buttons">
                  <button className="login_btn nav_btn" onClick={handleLoginClick}>
                    Login
                  </button>
                  <button className="sign_up_btn nav_btn">Sign up</button>
                </div>
              ) : null}
            </>
          )}
          {isMobile && (
            <div className="nav_icons">
              <img src={heart_icons} alt="Favorites" className="icon" />
              <img src={shopping_cart} alt="Cart" className="icon" />
              {isLoggedIn && <ProfileDropdown user={user} onLogout={handleLogout} />}
              <button
                className={`menu_toggle ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          )}
        </div>
        {isMobile && isMenuOpen && (
          <div className="mobile_menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/subscription">Subscribe</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><a href="#">About us</a></li>
              <li><Link to="/contactform">Contact us</Link></li>
              {!isLoggedIn ? (
                <>
                  <li>
                    <button className="login_btn nav_btn" onClick={handleLoginClick}>
                      Login
                    </button>
                  </li>
                  <li>
                    <button className="sign_up_btn nav_btn">Sign up</button>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        )}
      </nav>
      {showLoginPage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <LoginPage onLoginSuccess={handleLoginSuccess} />
            <button className="modal-close" onClick={handleCloseLoginPage}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;