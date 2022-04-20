import React from 'react'
import "./Home.css"
import banners from "./banners"
import Carousel from "react-elastic-carousel"
import { nanoid } from 'nanoid'


function Home() {
    
  return (
    <div className='home' name="home" id='home'>
        <Carousel className='corousel'>
            {banners.map(banner => <img className='banner' src={banner} alt='banner' key={nanoid()}/>)}
        </Carousel>
    </div>
  )
}

export default Home