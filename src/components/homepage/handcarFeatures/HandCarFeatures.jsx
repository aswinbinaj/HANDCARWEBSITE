import React from "react";
import "../handcarFeatures/HandCarFeatures.css";
import car_accessories from "../../../assets/car_accessories.png";
import car_image from "../../../assets/car_image.png";
import third_featureimg from "../../../assets/third_featureimg.png";

const HandCarFeatures = () => {
  return (
    <div className="features">
      <div className="first_feature">
        <div className="first_feature_content">
          <h1>
            Explore Best Accessories <br /> from Top Brands
          </h1>
          <button className="feature_btn">View Products</button>
        </div>
        <div className="first_feature_image">
          <img src={car_accessories} alt="Car Accessories" />
        </div>
      </div>

      <div className="side_features">
        <div className="second_feature">
          <div className="second_feature_content">
            <h1>
              Find best and cost effective <br />
              services for your ride
            </h1>
            <button className="feature_btn side_btn">Find Services</button>
          </div>
          <div className="second_feature_image">
            <img src={car_image} alt="Car" />
          </div>
        </div>

        <div className="second_feature">
          <div className="second_feature_content third_feature_content">
            <h1>
              Find best quality car spare <br />
              parts
            </h1>
            <button className="feature_btn side_btn">Enquire Now</button>
          </div>
          <div className="third_feature_image">
            <img src={third_featureimg} alt="Car" />
          </div>
        </div>
      </div>

      <></>
    </div>
  );
};

export default HandCarFeatures;
