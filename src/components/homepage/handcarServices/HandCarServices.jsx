import React from "react";
import "../handcarServices/HandCarServices.css";
import handcarservices_header from "../../../assets/handcarservices_header.png";
import painting_accessories from "../../../assets/painting_accessories.png";
import washing_accessories from "../../../assets/washing_accessories.png";
import tyre_accessories from "../../../assets/tyre_accessories.png";
const HandCarServices = () => {
  return (
    <div className="handcar_services_container">
      <div className="handcar_services">
        <div className="handcar_services_heading">
          <h1>Hand Car Services</h1>
          <p>
            We Deliver Comprehensive Car Solutions! Explore Our Range of
            Services
          </p>
        </div>

        <div className="handcar_services_heading_img">
          <img src={handcarservices_header} alt="" />
        </div>
      </div>

      <div className="various_handcar_services">
        <div className="car_service">
            <img src={painting_accessories} alt="" srcset="" />
            <p>Car Painting Services</p>
        </div>

        <div className="car_service">
        <img src={washing_accessories} alt="" srcset="" />
        <p>Car Painting Services</p>
        </div>

        <div className="car_service">
        <img src={tyre_accessories} alt="" srcset="" />
        <p>Car Painting Services</p>
        </div>
      </div>
    </div>
  );
};

export default HandCarServices;
