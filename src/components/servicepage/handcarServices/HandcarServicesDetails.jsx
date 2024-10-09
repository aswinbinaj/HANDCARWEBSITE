import React from 'react'
import "../handcarServices/HandcarServicesDetails.css"
import handcarservices_header from "../../../assets/handcarservices_header.png"
const HandcarServicesDetails = () => {
  return (
    <div>
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
    </div>
  )
}

export default HandcarServicesDetails
