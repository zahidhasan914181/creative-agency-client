import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Work.css'
import carousel5 from '../../../images/carousel-5.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel1 from '../../../images/carousel-1.png'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Work = () => {
    return (
        <div className="carousel-bg">
            <h4 className="text-white text-center mb-5 pb-5">Here are some of <span className="text-success">our works</span></h4>
            <Carousel responsive={responsive}>
            <div className="slider"><img src={carousel5} alt=""/></div>
            <div className="slider"><img src={carousel4} alt=""/></div>
            <div className="slider"><img src={carousel1} alt=""/></div>
            <div className="slider"><img src={carousel2} alt=""/></div>
            <div className="slider"><img src={carousel1} alt=""/></div>
        </Carousel>slider
        </div>
    );
};

export default Work;