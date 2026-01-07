import React from 'react'
import silderImg from "../../assets/images/1.png"
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
        <section className='silder'>
            <Carousel varient="dark">
      <Carousel.Item>
        <img src={silderImg} className='d-block w-100 ' style={{height: "690px"}} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
        </section>
    </>
  )
}

export default Banner;