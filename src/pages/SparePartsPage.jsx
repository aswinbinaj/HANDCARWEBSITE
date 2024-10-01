import React from 'react'
import Header from '../components/Header/Header'
import SparePartsHeader from '../components/sparepartspage/sparepartsHeader/SparePartsHeader'
import WhyChooseUs from '../components/sparepartspage/whyChooseUs/WhyChooseUs'
import SparePartsFinder from '../components/sparepartspage/sparepartsFinder/SparePartsFinder'
import ChasisNumberFinder from '../components/sparepartspage/chasisnumberFinder/ChasisNumberFinder'
import SparePartsBrands from '../components/subscriptionpage/sparepartsBrands/SparePartsBrands'
import Footer from '../components/footer/Footer'

const SparePartsPage = () => {
  return (
    <div>
      <Header/>
      <SparePartsHeader/>
      <WhyChooseUs/>
      <SparePartsFinder/>
      <ChasisNumberFinder/>
      <SparePartsBrands/>
      <Footer/>
    </div>
  )
}

export default SparePartsPage
