import React from "react";
import "../aboutHandcar/AboutHandcar.css";
import black_car from "../../../assets/black_car.png";
const AboutHandcar = () => {
  return (
    <div className="about_handcar_container">

        <div className="about_handcar">
            
            <div className="about_handcar_contents">
                <h1>About Handcar</h1>
                <div className="about_handcar_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti soluta iusto fugiat dolor magnam iure fuga rerum obcaecati ipsam repellendus tenetur ducimus possimus laborum dignissimos natus consectetur maxime, architecto iste similique odio aspernatur rem neque. Molestiae nobis facilis aliquid nemo nulla omnis cupiditate, voluptatem quos placeat fuga harum adipisci at consequuntur hic voluptates quo praesentium! Distinctio dolorum consequatur ut, magni accusamus placeat consequuntur! Aperiam laborum id ea saepe animi, inventore accusantium deleniti illum sunt a est eum, atque veritatis.</p>
                </div>
                <div className="customer_and_product_count">
                    <div className="counts">
                        <p>100+</p>
                        <p>500+</p>
                    </div>
                    <div className="customer_and_product_name">
                        <p>Happy Customers</p>
                        <p>Products Sold</p>
                    </div>
                </div>
            </div>

            <div className="about_handcar_image">
                <img src={black_car} alt="" />
            </div>
        </div>
      
    </div>
  );
};

export default AboutHandcar;
