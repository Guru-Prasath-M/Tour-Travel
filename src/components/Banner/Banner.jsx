import React from 'react'
import silderImg from "../../assets/images/1.png"
import silderImg1 from "../../assets/images/3.png"
import { Carousel } from 'react-bootstrap';
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
        <section className='silder'>
            <Carousel varient="dark">
      <Carousel.Item>
        <img src={silderImg} className='d-block w-100 ' style={{height: "695px"}} alt="First slide" />
        <Carousel.Caption>
          <div className='silder_des'>
            <h5 className='heading'>JOURNEY TO  <span>EXPLORE WORLD</span></h5>
          <p className='sub_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorem error porro totam, eveniet ipsa nisi facere placeat quo alias rerum reprehenderit nam minima neque, amet, architecto at. Reprehenderit, vel?</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img src={silderImg1} className='d-block w-100 ' style={{height: "695px"}} alt="First slide" />
        <Carousel.Caption>
          <div className='silder_des'>
            <h5 className='heading'>BEAUTIFUL PLACE  <span>TO VISIT</span></h5>
          <p className='sub_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorem error porro totam, eveniet ipsa nisi facere placeat quo alias rerum reprehenderit nam minima neque, amet, architecto at. Reprehenderit, vel?</p>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    </>
  )
}

export default Banner;