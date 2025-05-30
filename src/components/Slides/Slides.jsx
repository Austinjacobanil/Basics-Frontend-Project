import React from 'react'
import './Slides.css'
import logo from '../../assets/logo.png'

const Slides = () => {
  return (
    <div className='slide'>
        <div class="mySlides">
    <div class="numbertext">1 / 6</div>
      <img src={logo} style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
      <img src={logo} style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
    <img src={logo} style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
    <img src={logo} style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
    <img src={logo} style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
    <img src={logo} style="width:100%"/>
  </div>

 
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>


  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods"/>
    </div>
    <div class="column">
      <img class="demo cursor" src="img_5terre.jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre"/>
    </div>
    <div class="column">    
      <img class="demo cursor" src="img_mountains.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords"/>
    </div>
    <div class="column">
      <img class="demo cursor" src="img_lights.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights"/>
    </div>
    <div class="column">
      <img class="demo cursor" src="img_nature.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise"/>
    </div>
    <div class="column">
      <img class="demo cursor" src="img_snow.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains"/>
    </div>
  </div>

    </div>
  )
}

export default Slides