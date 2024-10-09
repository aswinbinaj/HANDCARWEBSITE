import React from "react";
import "../accessoriesDetails/AccessoriesDetails.css";
import accessories_for_maintainance from "../../../assets/accessories_for_maintainance.png";
import accessories_for_interiors from "../../../assets/accessories_for_interiors.png";
import accessories_for_automotives from "../../../assets/accessories_for_automotives.png";
import topbrand_accessories from "../../../assets/topbrand_accessories.png";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";
const AccessoriesDetails = () => {
  return (
    <div className="accessories_details_container">
      <div className="accessories_category_scroll">
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_interiors} alt="" srcset="" />
          </div>
          <p>Interior Accessories</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_automotives} alt="" srcset="" />
          </div>
          <p>Automotive Electronics</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
        <div className="accessories_category_detail">
          <div className="accessories_img_container">
            <img src={accessories_for_maintainance} alt="" srcset="" />
          </div>
          <p>Maintanace & cares</p>
        </div>
      </div>

      <div className="accessories_sorting">
        <h2>532 results</h2>
        <p>sort by</p>
        <select>
          <option value="1">Recommended</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="accessories_filter_btn">
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
        <button>Category 1</button>
        <button>Category 2</button>
        <button>Category 3</button>
        <button>Category 1</button>
        <button>Category 2</button>
      </div>

      <div className="accessories_list">

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
        </div>
    </div>
  );
};

export default AccessoriesDetails;
