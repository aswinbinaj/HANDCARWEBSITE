import React from 'react'
import Header from '../components/Header/Header'
import HandcarServicesDetails from '../components/servicepage/handcarServices/HandcarServicesDetails'
import VariousHandcarServices from '../components/servicepage/variousHandcarServices/VariousHandcarServices'
import PaintingService from '../components/servicepage/paintingService/PaintingService'
import PaintingServiceDetailPopup from '../components/servicepage/paintingService/PaintingServiceDetailPopup'

const ServicePage = () => {
  return (
    <div>
      <Header/>
      {/* <HandcarServicesDetails/> */}
      <VariousHandcarServices/>
      <PaintingService/>
      <PaintingServiceDetailPopup/>
    </div>
  )
}

export default ServicePage
