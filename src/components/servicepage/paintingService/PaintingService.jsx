import React, { useState } from "react";
import "../paintingService/PaintingService.css";
import painting_service_img from "../../../assets/painting_service_img.png";

const PaintingServiceDetailPopup = ({ service, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{service.name}</h2>
        <p>Price: {service.price}</p>
        <p>Redeem code to get contact details & 20% discount on service</p>
        <p>Contact Details: +1 234 567 8900</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const PaintingService = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleViewDetails = (serviceName, price) => {
    setSelectedService({ name: serviceName, price: price });
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="painting_service_container">
      <div className="painting_service_heading">
        <h2>213 painting service around you</h2>
      </div>
      
      <div className="painting_services">
        <div className="painting_service_box">
          <img src={painting_service_img} alt="" />
          <div className="painting_service_heading">
            <h3>ICON Rocklear Paint Solutions</h3>
          </div>
          
          <div className="painting_service_box_contents">
            <p>
              Redeem code to get Product details & <br />
              20% discount on service
            </p>
            <h3>AED 99/hr</h3>
            <button onClick={() => handleViewDetails("ICON Rocklear Paint Solutions", "AED 99/hr")}>
              View Product Details
            </button>
          </div>
        </div>

        <div className="painting_service_box">
          <img src={painting_service_img} alt="" />
          <div className="painting_service_heading">
            <h3>ICON Rocklear Paint Solutions</h3>
          </div>
          
          <div className="painting_service_box_contents">
            <p>
              Redeem code to get contact details & <br />
              20% discount on service
            </p>
            <h3>AED 99/hr</h3>
            <button onClick={() => handleViewDetails("ICON Rocklear Paint Solutions", "AED 99/hr")}>
              View Contact Details
            </button>
          </div>
        </div>

        <div className="painting_service_box">
          <img src={painting_service_img} alt="" />
          <div className="painting_service_heading">
            <h3>ICON Rocklear Paint Solutions</h3>
          </div>
          
          <div className="painting_service_box_contents">
            <p>
              Redeem code to get contact details & <br />
              20% discount on service
            </p>
            <h3>AED 99/hr</h3>
            <button onClick={() => handleViewDetails("ICON Rocklear Paint Solutions", "AED 99/hr")}>
              View Contact Details
            </button>
          </div>
        </div>

        <div className="painting_service_box">
          <img src={painting_service_img} alt="" />
          <div className="painting_service_heading">
            <h3>ICON Rocklear Paint Solutions</h3>
          </div>
          
          <div className="painting_service_box_contents">
            <p>
              Redeem code to get contact details & <br />
              20% discount on service
            </p>
            <h3>AED 99/hr</h3>
            <button onClick={() => handleViewDetails("ICON Rocklear Paint Solutions", "AED 99/hr")}>
              View Contact Details
            </button>
          </div>
        </div>

        <div className="painting_service_box">
          <img src={painting_service_img} alt="" />
          <div className="painting_service_heading">
            <h3>ICON Rocklear Paint Solutions</h3>
          </div>
          
          <div className="painting_service_box_contents">
            <p>
              Redeem code to get contact details & <br />
              20% discount on service
            </p>
            <h3>AED 99/hr</h3>
            <button onClick={() => handleViewDetails("ICON Rocklear Paint Solutions", "AED 99/hr")}>
              View Contact Details
            </button>
          </div>
        </div>

        <div className="painting_service_box">
          <img src={painting_service_img} alt="" />
          <div className="painting_service_heading">
            <h3>ICON Rocklear Paint Solutions</h3>
          </div>
          
          <div className="painting_service_box_contents">
            <p>
              Redeem code to get contact details & <br />
              20% discount on service
            </p>
            <h3>AED 99/hr</h3>
            <button onClick={() => handleViewDetails("ICON Rocklear Paint Solutions", "AED 99/hr")}>
              View Contact Details
            </button>
          </div>
        </div>
      </div>

      {selectedService && (
        <PaintingServiceDetailPopup
          service={selectedService}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default PaintingService;