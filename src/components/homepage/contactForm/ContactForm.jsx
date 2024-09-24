import React from "react";
import "../contactForm/ContactForm.css";

import contactfrom_bg_car from "../../../assets/contactfrom_bg_car.jpg";

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const ContactForm = () => {
  return (
    <div className="contact_form_container">
    <div className="contact_section">
      <div className="contact_details">
        <h1>Contact us</h1>
      </div>
  
      <div className="contact_details_and_logo">
        <div className="contact_logo">
          <div className="contact_details_logo">
            <CiLocationOn size={20} />
          </div>
          <div className="contact_details_logo">
            <MdOutlineForwardToInbox size={20} />
          </div>
          <div className="contact_details_logo">
            <FaPhone size={20} />
          </div>
        </div>
  
        <div className="contact_detail_content">
          <p>Based in Abu Dhabi, UAE</p>
          <p>mailaddress@gmail.com</p>
          <p>+971234567891234</p>
        </div>
      </div>
    </div>
  
    <div className="contact_form">
      <div className="name_and_ph_no">
        <input type="text" name="" id="" placeholder="Name" />
        <input type="tel" name="" id="" placeholder="Phone Number" />
      </div>
  
      <div className="contact_form_email">
        <input type="email" name="" id="" placeholder="Email Address" />
      </div>
  
      <div className="contact_form_message">
        <input type="text" name="" id="" placeholder="Your Message" />
      </div>
  
      <div className="contact_form_button">
        <button>Send Message</button>
      </div>
    </div>
  </div>
  
  );
};

export default ContactForm;