import React, { Children } from "react";
import Slider from "infinite-react-carousel";
import "./Slides.scss";


const Slides = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className="slides">
      <div className="container">
        <Slider slidesToShow={slidesToShow}  arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slides;
