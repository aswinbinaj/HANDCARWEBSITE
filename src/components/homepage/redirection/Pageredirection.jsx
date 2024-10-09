import React from "react";
import "../redirection/Pageredirection.css";
import { Link } from "react-router-dom";
const Pageredirection = () => {
  return (
    <div className="home_page_redirection">
      {/* <p>Accessories</p> */}
      <Link to="/servicepage" >
        <p>Accessories</p>
      </Link>
      <Link to="/autoparts" >
      <p>Auto Parts</p>
      </Link>
      
      <p>Services</p>
    </div>
  );
};

export default Pageredirection;
