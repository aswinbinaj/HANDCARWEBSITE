import React from 'react'
import Pageredirection from '../components/homepage/redirection/Pageredirection'
import PartsFinder from '../components/homepage/partsfinder/PartsFinder'
import HandCarFeatures from '../components/homepage/handcarFeatures/HandCarFeatures'
import ExclusiveOffers from '../components/homepage/exclusiveoffers/ExclusiveOffers'
import BestDeals from '../components/homepage/bestdeals/BestDeals'


const HomePage = () => {
  return (
    <div>
     <Pageredirection/>
     <PartsFinder/>
     <HandCarFeatures/>
     <ExclusiveOffers/>
     <BestDeals/>
    </div>
  )
}

export default HomePage
