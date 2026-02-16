import React from 'react'

import Hero from './Hero'
import Card from './Card'

const Home = ({ details }) => {
  return (
    <>
      <Hero/>
      <Card details={details} />
    </>
  )
}

export default Home