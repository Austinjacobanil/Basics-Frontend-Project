import React from 'react'
import './Services.css'
import basics from '../../assets/basics.jpg'

const Services = () => {
  return (
    <div className='services'> 
        <div className="service1">
        <a class="card1" href="#">
          <h3>Filteration Plants</h3>
          <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
          </a>
        {/* </div> */}
        {/* <div className="service"> */}
        <a class="card1" href="#">
          <h3>Comercial Waters</h3>
          <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
          </a>
        {/* </div>
        <div className="service"> */}
        <a class="card1" href="#">
          <h3>Residential Waters</h3>
          <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
          </a>
        </div>

        <div className="service-img">
            <img src={basics}alt="" />
        </div>

        <div className="service2">
        <a class="card1" href="#">
          <h3>Water Softening</h3>
          <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
          </a>
        {/* </div>
        <div className="service"> */}
        <a class="card1" href="#">
          <h3>Market Research</h3>
          <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
          </a>
        {/* </div>
        <div className="service"> */}
        <a class="card1" href="#">
          <h3>Project Planning</h3>
          <p class="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
          </a>
        </div>

    </div>
  )
}

export default Services