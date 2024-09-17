import React from "react";
import "../testimonials/Testimonials.css";
import testimonials_icon from "../../../assets/testimonials_icon.svg";
import testimonial_profile from "../../../assets/testimonial_profile.png";
const Testimonials = () => {
  return (
    <div className="testimonials_container">
      <div className="testimonials_heading">
        <h1>What our Customers Say</h1>
      </div>

      <div className="various_testimonials">

      <div className="testimonials">
        <img src={testimonials_icon} alt="" srcset="" />
        <p>
          The quality is outstanding, and the customer service team went above
          and beyond to ensure I had a great experience. It's rare to find a
          company that genuinely cares about its customers as much as they do
          about their product. I've noticed a significant improvement in, and
          it's made a huge difference in my .{" "}
        </p>
        <div className="testimonial_profile">
          <img src={testimonial_profile} alt="" srcset="" />
          <div className="profile_detail">
            <h3>Abu Ibrahim</h3>
            <p>Dubai</p>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <img src={testimonials_icon} alt="" srcset="" />
        <p>
          The quality is outstanding, and the customer service team went above
          and beyond to ensure I had a great experience. It's rare to find a
          company that genuinely cares about its customers as much as they do
          about their product. I've noticed a significant improvement in, and
          it's made a huge difference in my .{" "}
        </p>
        <div className="testimonial_profile">
          <img src={testimonial_profile} alt="" srcset="" />
          <div className="profile_detail">
            <h3>Abu Ibrahim</h3>
            <p>Dubai</p>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <img src={testimonials_icon} alt="" srcset="" />
        <p>
          The quality is outstanding, and the customer service team went above
          and beyond to ensure I had a great experience. It's rare to find a
          company that genuinely cares about its customers as much as they do
          about their product. I've noticed a significant improvement in, and
          it's made a huge difference in my .{" "}
        </p>
        <div className="testimonial_profile">
          <img src={testimonial_profile} alt="" srcset="" />
          <div className="profile_detail">
            <h3>Abu Ibrahim</h3>
            <p>Dubai</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
