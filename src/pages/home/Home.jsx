import React, { useEffect } from 'react'
import Top from './top/Top'
import Hero from '../../components/hero-section/Hero';

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