import React from "react";
import "../sparepartsHeader/SparePartsHeader.css";
import spare_parts_header_img from "../../../assets/spare_parts_header_img.png";
const SparePartsHeader = () => {
  return (
    <div className="spare_parts_header_container">
      <div className="spare_parts_header_content">
        <h1>
          Find best in quality <br /> spare parts for your drive
        </h1>
        <p>
          Reliable Performance, Guaranteed: Discover top-tier spare parts
          engineered to elevate your driving experience.
        </p>
        <button>Enquire Now</button>
      </div>

      <div className="spare_parts_header_img">
        <img src={spare_parts_header_img} alt="" srcset="" />
      </div>
    </div>
  );
};

export default SparePartsHeader;
