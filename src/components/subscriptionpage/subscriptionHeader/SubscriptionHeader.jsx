import React from "react";
import "../subscriptionHeader/SubscriptionHeader.css";
import subscription_page_headerimg from "../../../assets/subscription_page_headerimage.svg";
const SubscriptionHeader = () => {
  return (
    <div className="subscription_container">
      <div className="subscription_contents">
        <h1>Ultimate Car Care Subscription</h1>
        <p>
          Keep your vehicle in top shape with our all-inclusive service
          packages. Enjoy hassle-free maintenance, exclusive <br /> discounts,
          and priority support—so you can drive with peace of mind all year
          round.
        </p>
        <button>View all plans</button>
        <img src={subscription_page_headerimg} alt="" srcset="" className="subscription_page_headerimg" />
      </div>
    </div>
  );
};

export default SubscriptionHeader;
