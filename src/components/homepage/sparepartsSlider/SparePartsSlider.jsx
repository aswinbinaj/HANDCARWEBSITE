import React from 'react'
import "../sparepartsSlider/SparePartsSlider.css"
import spare_parts_brand from "../../../assets/spare_parts_brand.png"
const SparePartsSlider = () => {
  return (
    <div className='spare_parts_slider'>

      <div className="spare_parts_slider_heading">
        <h1>Curated Original Spare Parts</h1>
      </div>

      <div className="spare_parts_slider_img">
        <img src={spare_parts_brand} height={80} alt="" srcset="" />
      </div>

    </div>
  )
}

export default SparePartsSlider
