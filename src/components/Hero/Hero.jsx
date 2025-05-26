import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Pure. Fresh. Essential. Quenching your thirst for life</h1>
            <p>Experience the essence of purity with every drop. At Basics, we deliver crystal-clear, refreshing mineral water, sourced from nature and packed with care to keep you hydrated and healthy. Because nothing is more essential to life than clean, pure water.</p>
            <button className='btn'>Get Started <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero