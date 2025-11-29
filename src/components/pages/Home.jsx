import React from 'react'
import Hero from '../layout/Hero'
import Gurntee from '../layout/Gurntee'
import SpecialOffers from '../SpecialOffers'
import Trending from '../layout/Trending'
import Activity from '../layout/Activity'
import Destination from '../layout/Destination'
import Testimonial from '../layout/Testimonial'
import Recommanded from '../layout/Recommanded'

const Home = () => {
  return (
    <>
    <Hero/>
    <Gurntee/>
    <SpecialOffers/>
    <Trending/>
    <Activity/>
    <Destination/>
    <Testimonial/>
    <Recommanded/>
    </>
  )
}

export default Home