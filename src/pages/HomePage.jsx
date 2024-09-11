import React from 'react'
import Pageredirection from '../components/homepage/redirection/Pageredirection'
import PartsFinder from '../components/homepage/partsfinder/PartsFinder'
import HandCarFeatures from '../components/homepage/handcarFeatures/HandCarFeatures'
import ExclusiveOffers from '../components/homepage/exclusiveoffers/ExclusiveOffers'
import BestDeals from '../components/homepage/bestdeals/BestDeals'
import GuaranteedFeatures from '../components/homepage/guaranteedfeatures/GuaranteedFeatures'
import AccessoriesByCategories from '../components/homepage/accessoriesbycategories/AccessoriesByCategories'
import CarAccessoriesList from '../components/homepage/carAccessoriesList/CarAccessoriesList'


const HomePage = () => {
  return (
    <div>
     <Pageredirection/>
     <PartsFinder/>
     <HandCarFeatures/>
     <ExclusiveOffers/>
     <BestDeals/>
     <GuaranteedFeatures/>
     <AccessoriesByCategories/>
     <CarAccessoriesList/>
    </div>
  )
}

export default HomePage
