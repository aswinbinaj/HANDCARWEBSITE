import React from 'react'

import Header from '../components/Header/Header'
import LoginPage from '../components/loginpage/LoginPage'
import SubscriptionHeader from '../components/subscriptionpage/subscriptionHeader/SubscriptionHeader'
import SubscriptionPlans from '../components/subscriptionpage/subscriptionplans/SubscriptionPlans'
import MaintainancePlans from '../components/subscriptionpage/maintainancePlans/MaintainancePlans'
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import AccessoriesByCategories from "../components/homepage/accessoriesbycategories/AccessoriesByCategories";
import Footer from '../components/footer/Footer'
import LuxuryPlan from '../components/subscriptionpage/subscriptionplans/LuxuryPlan'




const SubscriptionPage = () => {
  return (
    <div >
     
       <Header/>
      <SubscriptionHeader/>
      <SubscriptionPlans/>
      <MaintainancePlans/>
      <CarAccessoriesList />
      <AccessoriesByCategories />
      {/* <LuxuryPlan/> */}
      <Footer/>
      
      
    </div>
  )
}

export default SubscriptionPage
