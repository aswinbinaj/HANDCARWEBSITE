import React from 'react'
import "../paintingService/PaintingServiceDetailPopup.css"
import { IoClose } from "react-icons/io5";
import painting_service_img from "../../../assets/painting_service_img.png";
import fourstar_rating from "../../../assets/fourstar_rating.png"
import discount_coupon from "../../../assets/discount_coupon.png"
const PaintingServiceDetailPopup = () => {
  return (
    <div className='painting_service_detail_popup'>

      <div className="painting_service_popup_contents">

        <div className="painting_service_popup_heading">
          <h2>ICON Rocklear Paint Solutions</h2>
          <IoClose size={25} />
        </div>

        <div className="painting_service_popup_image">
          <img src={painting_service_img} alt="" srcset="" />
        </div>

        <div className="painting_service_popup_address">
          <p>Address</p>
          <img src={fourstar_rating} alt="" srcset="" />
        </div>

       <div className="painting_service_address">
        <p>M-33, MUSSAFAH , PLOT NO 26, STORE NO 2 POST BOX NO 37511 TEL: 025544140 ABUDHABI google coordinates: 24°21'23.5°N 54°30'32.2°E - Abu Dhabi - United Arab Emirates</p>
       </div>

       <div className="painting_Service_features">
        <p>Services</p>

        <ul>
          <li>Air and cabin filter replacement</li>
          <li>Battery</li>
          <li>Brakes</li>
          <li>Air Conditioning</li>
          <li>Electrical</li>
          <li>Vehicle Engine diagnostic</li>
          <li>Oil change </li>
          <li>Steering and suspension repair </li>
          <li>Transmission</li>
          <li>A/C installation and repair</li>
          <li>Vehicle A/C recharge</li>
          <li>Vehicle AC replacement</li>
          <li>Vehicle battery maintanance</li>
          <li>Vehicle battery replacement</li>
        </ul>

       </div>

       <div className="painting_Service_price">
        <h3>AED 99/hr</h3>
       </div>

       <div className="painting_service_discount_coupon">
        <img src={discount_coupon} alt="" srcset="" />
       </div>

      </div>
    </div>
  )
}

export default PaintingServiceDetailPopup
