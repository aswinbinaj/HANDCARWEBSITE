import React, { useState, useEffect } from "react";
import "../sparepartsBrands/SparePartsBrands.css";
import spare_parts_brand_header_img from "../../../assets/spare_parts_brand_header.png";
import brembo_brand_logo from "../../../assets/brembo_brand_logo.png";
import fuchs_brand_logo from "../../../assets/fuchs_brand_logo.png";
import elring_brand_logo from "../../../assets/elring_brand_logo.png";
import denso_brand_logo from "../../../assets/denso_brand_logo.png";
import total_brand_logo from "../../../assets/total_brand_logo.png";
import kyb_brand_logo from "../../../assets/kyb_brand_logo.png";
import mann_filter_logo from "../../../assets/mann_filter_logo.png";

const SparePartsBrands = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const renderBrandBox = (logo, alt) => (
    <div className="brand-box">
      <img src={logo} alt={alt} className="brand-logo" />
      <button className="enquire-button">Enquire Parts</button>
    </div>
  );

  return (
    <div className="spare-parts-container">
      <div className="spare_parts_header">
        <h1>Find spare parts from top brands</h1>
        <img
          src={spare_parts_brand_header_img}
          alt="Spare Parts Header"
          className="header-image"
        />
      </div>
      <div className="brand-grid">
        {renderBrandBox(brembo_brand_logo, "Brembo Brand")}
        {renderBrandBox(fuchs_brand_logo, "Fuchs Brand")}
        {renderBrandBox(elring_brand_logo, "Elring Brand")}
        {(isLargeScreen || showAll) && (
          <>
            {renderBrandBox(denso_brand_logo, "Denso Brand")}
            {renderBrandBox(total_brand_logo, "Total Brand")}
            {renderBrandBox(kyb_brand_logo, "KYB Brand")}
            {renderBrandBox(mann_filter_logo, "Mann Filter Brand")}
            {renderBrandBox(mann_filter_logo, "Mann Filter Brand")}
          </>
        )}
      </div>
      {!isLargeScreen && !showAll && (
        <div className="see_more_brands_btn">
          <button onClick={() => setShowAll(true)}>See more brands</button>
        </div>
      )}
    </div>
  );
};

export default SparePartsBrands;
