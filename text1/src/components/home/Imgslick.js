import React, { Component } from 'react';
import Slider from 'react-slick';
//import styles from "./header.css";
//import { Link } from 'react-router';

class Imgslick extends Component {
    render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay:false,
      arrows: false
    };
    return (
      <div style={{margin:"8px 0",width:"100%"}}>
        <Slider {...settings}>
            <div style={{height:120}}>
                <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} style={{height:"100%",width:"100%"}}/>
            </div>
            <div style={{height:120}}>
                <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} style={{height:"100%",width:"100%"}}/>
            </div>
            <div style={{height:120}}>
                <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} style={{height:"100%",width:"100%"}}/>
            </div>
            <div style={{height:120}}>
                <img src={'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'} style={{height:"100%",width:"100%"}}/>
            </div>
        </Slider>
      </div>
    );
  }
}

export default Imgslick