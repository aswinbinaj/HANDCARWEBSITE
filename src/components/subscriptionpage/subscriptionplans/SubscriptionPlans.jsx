import React, { useState } from "react";
import "../subscriptionplans/SubscriptionPlans.css";
import subscriptionpage_underline from "../../../assets/subscriptionpage_underline.svg";
import { TiTick } from "react-icons/ti";
import LuxuryPlan from "../subscriptionplans/LuxuryPlan.jsx";

const SubscriptionPlans = () => {
  const [showLuxuryPlan, setShowLuxuryPlan] = useState(false);

  const handleLuxuryClick = () => {
    setShowLuxuryPlan(true);
  };

  const handleClosePopup = () => {
    setShowLuxuryPlan(false);
  };

  return (
    <div className="subscriptionplans_container">
      <div className="subscriptionplans_content">
        <div className="subscription_heading">
          <h1>A Plan for Every Car Washing Need</h1>
          <img
            src={subscriptionpage_underline}
            alt=""
            className="subscription_underline"
          />
        </div>
        <p>
          Whether it's a quick rinse or a detailed clean, we offer customized
          services to meet every car <br />
          washing need. Experience the difference with our specialized care and
          attention to detail.
        </p>
        <div className="subscriptionpage_buttons">
          <button className="sub_sixmonth">6 months</button>
          <button className="sub_twelvemonth">12 months</button>
        </div>
        <p>
          <span className="sub_offer">save 10% off </span>on 6 month
          subscription
        </p>
      </div>

      <div className="subscription_plan">
        {/* Basic Plan */}
        <div className="basic_plan">
          <div className="plan_tittle">
            <p>Basic</p>
          </div>

          <div className="plan_price">
            <h1>AED 299</h1>
            <p>/month</p>
          </div>

          <div className="plan_features">
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>
                  Unlimited Exterior wash using high- <br />
                  pressure sprays Interior vacuuming
                </p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Cleaning of windows and mirrors</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="subscription_discounts">
              <p>Multiple Cars Discount</p>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">1</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>Full Price</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">2</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>10% off/car</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">3</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>20% off/car</p>
                </div>
              </div>
            </div>
            <button className="plan_subscribe_btn"onClick={handleLuxuryClick}>Subscribe</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="basic_plan">
          <div className="plan_tittle">
            <p>Premium</p>
          </div>

          <div className="plan_price">
            <h1>AED 599</h1>
            <p>/month</p>
          </div>

          <div className="plan_features">
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Unlimited All Premium Wash Plan services</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Full interior shampoo</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Wax application</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Tire Dressing</p>
              </div>
            </div>
            <div className="subscription_discounts">
              <p>Multiple Cars Discount</p>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">1</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>Full Price</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">2</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>10% off/car</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">3</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>20% off/car</p>
                </div>
              </div>
            </div>
            <button className="plan_subscribe_btn" onClick={handleLuxuryClick}>Subscribe</button>
          </div>
        </div>

        {/* Luxury Plan */}
        <div className="basic_plan">
          <div className="plan_tittle">
            <p>Luxury</p>
          </div>

          <div className="plan_price">
            <h1>AED 749</h1>
            <p>/month</p>
          </div>

          <div className="plan_features">
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Unlimited All Premium Wash Plan services</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Engine compartment wash</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>High Definition waxing</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>
              <div className="plan_feature_content">
                <p>Leather conditioning</p>
              </div>
            </div>
            <div className="subscription_discounts">
              <p>Multiple Cars Discount</p>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">1</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>Full Price</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">2</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>10% off/car</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">3</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>20% off/car</p>
                </div>
              </div>
            </div>
            <button className="plan_subscribe_btn" onClick={handleLuxuryClick}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Plan Popup */}
      {showLuxuryPlan && (
        <div className="popup-overlay">
          <div className="subscription_plan_popup">
            <div className="subscription_plan_popup_content">
              <button className="close-popup" onClick={handleClosePopup}>x</button>
              <LuxuryPlan />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;
