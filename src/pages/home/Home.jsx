import React, { useEffect } from 'react'
import Hero from './hero-section/Hero'
import Top from './top/Top'

const Home = () => {
  
  useEffect(() => {
    window.scroll(0, 0);
}, [])
  return (
    <>
    <Hero />
    <Top />
    </>
  )
}

export default Home