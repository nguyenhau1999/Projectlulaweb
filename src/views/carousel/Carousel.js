import React from 'react';
// import ReactDOM from "react-dom";
import Slider from "react-slick";
import anhslick from '../../assets/images/anhslick.png';
import "../carousel/carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 0
      };
      return (
        
        <div className="container">
        
          <Slider {...settings}>
          <div>
          <img src={anhslick} alt="anh"></img>
          </div>
          <div>
          <img src={anhslick} alt="anh">
          </img>
          </div>
          <div><img src={anhslick} alt="anh"></img></div>
          <div><img src={anhslick} alt="anh"></img></div>
          <div><img src={anhslick} alt="anh"></img></div>
          <div><img src={anhslick} alt="anh"></img></div>
          
          </Slider>
          
        </div>
        
      );
    }
  }
  
  export default Carousel;