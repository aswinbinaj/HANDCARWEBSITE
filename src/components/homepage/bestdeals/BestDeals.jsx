import React from 'react'
import "../bestdeals/BestDeals.css"
import top_deal_product_img from "../../../assets/top_deal_product_img.png"
import star_icon from "../../../assets/star_icon.png"
import open_star_icon from "../../../assets/open_star_icon.png"
const BestDeals = () => {
  return (
    <div className='best_deals'>

      <div className="best_deal_heading">
        <h1>Today's Deals <span>Upto 60% OFF</span></h1>
      </div>

      <div className="top_deal_products">
        <div className="top_deal_product_img">
            <img src={top_deal_product_img} alt="" srcset="" />
        </div>
        <div className="top_deal_offer">
            <button className='offerbtn'>Upto 30% OFF</button>
            <p>Deal of the day</p>
        </div>
        <div className="top_deal_product_description">
            <p>UNITOPSCI Wireless Apple CarPlay Portable Car Stereo..</p>
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

      <div className="top_deal_products">
        <div className="top_deal_product_img">
            <img src={top_deal_product_img} alt="" srcset="" />
        </div>
        <div className="top_deal_offer">
            <button className='offerbtn'>Upto 30% OFF</button>
            <p>Deal of the day</p>
        </div>
        <div className="top_deal_product_description">
            <p>UNITOPSCI Wireless Apple CarPlay Portable Car Stereo..</p>
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
      <div className="top_deal_products">
        <div className="top_deal_product_img">
            <img src={top_deal_product_img} alt="" srcset="" />
        </div>
        <div className="top_deal_offer">
            <button className='offerbtn'>Upto 30% OFF</button>
            <p>Deal of the day</p>
        </div>
        <div className="top_deal_product_description">
            <p>UNITOPSCI Wireless Apple CarPlay Portable Car Stereo..</p>
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
      <div className="top_deal_products">
        <div className="top_deal_product_img">
            <img src={top_deal_product_img} alt="" srcset="" />
        </div>
        <div className="top_deal_offer">
            <button className='offerbtn'>Upto 30% OFF</button>
            <p>Deal of the day</p>
        </div>
        <div className="top_deal_product_description">
            <p>UNITOPSCI Wireless Apple CarPlay Portable Car Stereo..</p>
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
  )
}

export default BestDeals
