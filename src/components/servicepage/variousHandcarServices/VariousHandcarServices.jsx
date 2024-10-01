import React from "react";
import "../variousHandcarServices/VariousHandcarServices.css";
import car_wash_icon from "../../../assets/car_wash_icon.png";
import car_beauty_icon from "../../../assets/car_beauty_icon.png";
import car_service_icon from "../../../assets/car_service_icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const VariousHandcarServices = () => {
  return (
    <div className="various_handcar_services_container">
      <div className="handcar_services_main_heading">
        <h1>Our Services</h1>
      </div>

      <div class="various_services_container">
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Car Wash</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_beauty_icon} alt="" />
            <h4>Beauty</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_service_icon} alt="" />
            <h4>Service</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Refit</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Tire Repair</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Waxing</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Maintenance</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Interior Cleaning</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
        <div class="box">
          <div className="service_box_contents">
            <img src={car_wash_icon} alt="" />
            <h4>Classification</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariousHandcarServices;
