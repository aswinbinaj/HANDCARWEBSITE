import React from 'react'
import "../subscriptionplans/LuxuryPlan.css"
import ten_percentage_off from "../../../assets/ten_percentage_off.svg"
import popular_plan from "../../../assets/popular_plan.svg";
import { TiTick } from "react-icons/ti";
const LuxuryPlan = () => {
  return (
    <div className='luxury_plan_container'>
      <div className="luxury_plan_content">
        <h2>Unlock <span >Greater Savings</span> by adding <br />our basic maintainance plan and get</h2>
        <img src={ten_percentage_off} alt="" srcset="" className='ten_percentage_off' />

       <div className="luxury_plan_popup">
            <div className="luxury_pan_popup_headline">
              <h1>Luxury</h1>
              <img src={popular_plan} alt="" srcset="" />
            </div>
            <div className="luxury_plan_popup_price">
              <h1>AED 749</h1>
              <p>/month</p>
            </div>
            <div className="luxury_plan_popup_features">
              <div className="plan_feature_icon"> <TiTick /></div>
              <div className="plan_feature_content">
                <p>
                  Unlimited Exterior wash using high- <br />
                  pressure sprays Interior vacuuming
                </p>
              </div>
              
            </div>

            <div className="luxury_plan_popup_features">
              <div className="plan_feature_icon"> <TiTick /></div>
              <div className="plan_feature_content">
                <p>
                  Unlimited Exterior wash using high- <br />
                  pressure sprays Interior vacuuming
                </p>
              </div>
              
            </div>
            <div className="luxury_plan_popup_features">
              <div className="plan_feature_icon"> <TiTick /></div>
              <div className="plan_feature_content">
                <p>
                  Unlimited Exterior wash using high- <br />
                  pressure sprays Interior vacuuming
                </p>
              </div>
              
            </div>
            <button className='luxury_plan_popup_button'>Subscribe and Save More</button> 
            <button className='luxury_plan_popup_button current_plan'>Stay with Current plan</button> 

            
       </div>
      </div>
    </div>
  )
}

export default LuxuryPlan
