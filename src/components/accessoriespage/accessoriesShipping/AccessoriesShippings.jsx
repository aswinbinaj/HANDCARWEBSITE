import React, { useState } from "react";
import "../accessoriesShipping/AccessoriesShippings.css";
import AccessoriesHeader from "../accessoriesHeader/AccessoriesHeader";
import Footer from "../../footer/Footer";

const AccessoriesShippings = () => {
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleAddressSelection = (addressId) => {
    setSelectedAddress(addressId);
  };

  return (
    <div>
      <AccessoriesHeader />
      <div className="accessories_shipping_container">
        <div className="accessories_shipping">
          <div className="accessories_cart_path">
            <p>
              Home {">"} Cart {">"} <span>Address</span>
            </p>
          </div>

          <div className="accessories_shipping_and_cart">
            <div className="accessories_shipping_address">
              <h3>Select a Shipping Address</h3>
              <div 
                className={`address_item ${selectedAddress === "address1" ? "selected_address" : ""}`}
              >
                <input 
                  type="radio" 
                  name="shipping" 
                  id="address1"
                  onChange={() => handleAddressSelection("address1")}
                  checked={selectedAddress === "address1"}
                />
                <label htmlFor="address1">
                  Ahmed Al-Farsi
                  <br />
                  123 Sheikh Zayed Road, Downtown Dubai,
                  <br /> Dubai, United Arab Emirates <br />
                  P.O. Box 12345, Mobile: +971 50 123 4567
                </label>
              </div>
              <div 
                className={`address_item ${selectedAddress === "address2" ? "selected_address" : ""}`}
              >
                <input 
                  type="radio" 
                  name="shipping" 
                  id="address2"
                  onChange={() => handleAddressSelection("address2")}
                  checked={selectedAddress === "address2"}
                />
                <label htmlFor="address2">
                  Ahmed Al-Farsi
                  <br />
                  123 Sheikh Zayed Road, Downtown Dubai,
                  <br /> Dubai, United Arab Emirates <br />
                  P.O. Box 12345, Mobile: +971 50 123 4567
                </label>
              </div>
            </div>

            <div className="shipping_cart">
              
            </div>
          </div>

          <div className="add_address">
            <div className="add_address_tittle">
              <h3>Add a new address</h3>
            </div>
            <div className="full_name">
              <p>Full name</p>
              <input type="text" name="" id="" />
            </div>
            <div className="first_address">
              <p>Address line 1</p>
              <input type="text" name="" id="" placeholder="Street address, company name, c/o" />
            </div>
            <div className="second_address">
              <p>Address line 2</p>
              <input type="text" name="" id="" placeholder="Apartment, suite, unit, building, floor, etc." />
            </div>
            <div className="address_state">
              <p>State/Province/Region</p>
              <input type="text" name="" id="" />
            </div>
            <div className="zip_and_pincode">
              <div className="zip_code">
                <p>ZIP</p>
                <input type="number" name="" id="" />
              </div>
              <div className="pin_code">
                <p>Pincode</p>
                <input type="number" name="" id="" />
              </div>
            </div>
            <div className="address_ph_number">
              <p>Phone number</p>
              <input type="text" name="" id="" />
            </div>
            <div className="add_address_btn">
              <button>Add & choose address</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AccessoriesShippings;