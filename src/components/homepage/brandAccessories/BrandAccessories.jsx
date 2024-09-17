import React from "react";
import "../brandAccessories/BrandAccessories.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import pioneer_accessories from "../../../assets/pioneer_accessories.png";
import pioneer_logo from "../../../assets/pioneer_logo.png";
const BrandAccessories = () => {
  return (
    <div className="brand_accessories_container">
      <div className="brand_accessories">
        <div className="brand_accessories_heading">
          <h1>Find Accessories by Brands</h1>
        </div>

        <div className="brand_accessories_content">
          <div className="accessories_scroll_btn">
            <FaAngleLeft size={50} color="#C1C1C1" />
          </div>

          <div className="brand_accessories_products">
            <img src={pioneer_logo} alt="" srcset="" className="pioneer_logo" />
            <img src={pioneer_accessories} alt="" srcset="" />
            <h2>
              Explore Products from Pioneer <br />
              Audio
            </h2>
            <div className="about_pioneer">
              <p>Best Brand Selected by Customers</p>
            </div>
          </div>

          <div className="brand_accessories_products">
            <img src={pioneer_logo} alt="" srcset="" className="pioneer_logo" />
            <img src={pioneer_accessories} alt="" srcset="" />
            <h2>
              Explore Products from Pioneer <br />
              Audio
            </h2>
            <div className="about_pioneer">
              <p>Best Brand Selected by Customers</p>
            </div>
          </div>

          <div className="accessories_scroll_btn">
            <FaAngleRight size={50} color="#C1C1C1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAccessories;
