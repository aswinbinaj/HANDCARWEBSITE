import React from "react";
import "../exclusiveoffers/ExclusiveOffers.css";
import exclusive_offer_coverimg from "../../../assets/exclusive_offer_coverimg.png";
const ExclusiveOffers = () => {
  return (
    <div className="exclusive_offers_container">
      <div className="exclusive_offers">
        <div className="first_offer offers">
          <button className="exclusive_offer_btn">Exclusive</button>
          <h1>
            WEEKEND <br /> OFFER
          </h1>
          <p>Flat 10% off on accessories</p>
          <button className="coupon_code_btn">Use Code : WKNOFR10</button>
          <div className="first_offer_img">
            <img
              src={exclusive_offer_coverimg}
              alt=""
              srcset=""
              className="exclusive_offer_coverimg"
            />
          </div>
        </div>

        <div className="first_offer offers second_offer">
          <button className="exclusive_offer_btn">Exclusive</button>
          <h1>
            FREE CAR <br /> SERVICE
          </h1>
          <p>On every purchase above <br />AED100</p>
          {/* <button className="coupon_code_btn">Use Code : WKNOFR10</button> */}
          <div className="first_offer_img">
            <img
              src={exclusive_offer_coverimg}
              alt=""
              srcset=""
              className="exclusive_offer_coverimg"
            />
          </div>
        </div>

        {/* <div className="first_offer offers">
          <button className="exclusive_offer_btn">Exclusive</button>
          <h1>
            WEEKEND <br /> OFFER
          </h1>
          <p>Flat 10% off on accessories</p>
          <button className="coupon_code_btn">Use Code : WKNOFR10</button>
          <div className="first_offer_img">
            <img
              src={exclusive_offer_coverimg}
              alt=""
              srcset=""
              className="exclusive_offer_coverimg"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
