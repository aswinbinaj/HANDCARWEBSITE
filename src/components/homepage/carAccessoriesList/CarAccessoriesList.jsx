import React from "react";
import "../carAccessoriesList/CarAccessoriesList.css";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";
import top_deal_product_img from "../../../assets/top_deal_product_img.png";
import topbrand_accessories from "../../../assets/topbrand_accessories.png";
const CarAccessoriesList = () => {
  return (
    <div className="car_accessories_list_container">
      <div className="car_accessories_header">
        <h1>Discover Car Accessories From Top Brands</h1>
        <button>View all Products</button>
      </div>
      <div className="listof_top_deal_products">
        
        <div className="top_deal_products top_brand_accessories">
          <div className="top_deal_product_img">
            <img src={topbrand_accessories} alt="" srcset="" />
          </div>
          <div className="top_deal_offer">
            <button className="offerbtn car_accessories_offerbtn">30% OFF</button>
            {/* <p>Deal of the day</p> */}
          </div>
          <div className="top_deal_product_description">
            <p>Bosch F002H60041 Front Brake Pad for Passenger Cars <br /> (Set of 4)</p>
          </div>
          <div className="rating_icon">
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={open_star_icon} alt="" />
          </div>
          <div className="top_deal_product_price">
            <p>AED120</p>
            <p>AED 199</p>
          </div>
        </div>

        <div className="top_deal_products top_brand_accessories">
          <div className="top_deal_product_img">
            <img src={topbrand_accessories} alt="" srcset="" />
          </div>
          <div className="top_deal_offer">
            <button className="offerbtn car_accessories_offerbtn "> 30% OFF</button>
            {/* <p>Deal of the day</p> */}
          </div>
          <div className="top_deal_product_description">
            <p>Bosch F002H60041 Front Brake Pad for Passenger Cars <br /> (Set of 4)</p>
          </div>
          <div className="rating_icon">
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={open_star_icon} alt="" />
          </div>
          <div className="top_deal_product_price">
            <p>AED120</p>
            <p>AED 199</p>
          </div>
        </div>
        <div className="top_deal_products top_brand_accessories">
          <div className="top_deal_product_img">
            <img src={topbrand_accessories} alt="" srcset="" />
          </div>
          <div className="top_deal_offer">
            <button className="offerbtn car_accessories_offerbtn"> 30% OFF</button>
            {/* <p>Deal of the day</p> */}
          </div>
          <div className="top_deal_product_description">
            <p>Bosch F002H60041 Front Brake Pad for Passenger Cars <br /> (Set of 4)</p>
          </div>
          <div className="rating_icon">
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={open_star_icon} alt="" />
          </div>
          <div className="top_deal_product_price">
            <p>AED120</p>
            <p>AED 199</p>
          </div>
        </div>
        <div className="top_deal_products top_brand_accessories">
          <div className="top_deal_product_img">
            <img src={topbrand_accessories} alt="" srcset="" />
          </div>
          <div className="top_deal_offer">
            <button className="offerbtn car_accessories_offerbtn"> 30% OFF</button>
            {/* <p>Deal of the day</p> */}
          </div>
          <div className="top_deal_product_description">
            <p>Bosch F002H60041 Front Brake Pad for Passenger Cars <br /> (Set of 4)</p>
          </div>
          <div className="rating_icon">
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={star_icon} alt="" srcset="" />
            <img src={open_star_icon} alt="" />
          </div>
          <div className="top_deal_product_price">
            <p>AED120</p>
            <p>AED 199</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAccessoriesList;
