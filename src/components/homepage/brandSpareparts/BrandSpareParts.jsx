import React from 'react';
import "../brandSpareparts/BrandSpareParts.css";
import topbrand_spare_parts from "../../../assets/topbrand_spare_parts.png";
import WhatsApp from "../../../utils/WhatsApp"; // Correctly import WhatsApp component

const BrandSpareParts = () => {
  return (
    <div className="brand_spare_parts_container">
      <div className="brand_spare_parts">
        <div className="brand_spare_parts_content">
          <h1>Find the Best Car Spare Parts From Top Brands</h1>
          <p>Discover a World of Car Accessories Tailored for <br />Every Style and Need.</p>
          
          {/* Button to trigger WhatsApp chat */}
          <WhatsApp buttonText="Contact us"  />
        </div>
        <div className='brand_spare_parts_img'>
          <img src={topbrand_spare_parts} alt="Top Brand Spare Parts" />
        </div>
      </div>
    </div>
  );
};

export default BrandSpareParts;
