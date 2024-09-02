import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollecton/New_Collection'
import NewsLetter from '../Components/News/NewsLetter'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Home
