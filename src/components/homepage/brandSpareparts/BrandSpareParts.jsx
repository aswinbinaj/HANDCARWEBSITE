import React from 'react'
import "../brandSpareparts/BrandSpareParts.css"
import topbrand_spare_parts from "../../../assets/topbrand_spare_parts.png"
const BrandSpareParts = () => {
  return (
    <div className="brand_spare_parts_container">

      <div className="brand_spare_parts">
        <div className="brand_spare_parts_content">
            <h1>Find the Best Car Spare Parts <br /> From Top Brands</h1>
            <p>Discover a World of Car Accessories Tailored for <br />Every Style and Need.</p>
            <button>Contact us</button>
        </div>

        <div className='brand_spare_parts_img'><img src={topbrand_spare_parts} alt="" srcset="" /></div>

        </div>
      
    </div>
  )
}

export default BrandSpareParts
