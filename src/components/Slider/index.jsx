import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToScroll: 1,
  speed: 500,
  dots: false,
  arrows: false,
  variableWidth: true,
};

const SliderContent = ({ slides, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  const prevIndex = () => ref.current.slickPrev();
  const nextIndex = () => ref.current.slickNext();

  return (
    <div className="content">
      <Slider
        ref={ref}
        beforeChange={(currentSlide, nextSlide) => {
          setCurrentIndex(nextSlide);
        }}
        {...settings}
        slidesToShow={isMobile ? 1 : 3}
        centerPadding={isMobile ? '0px' : '60px'}
      >
        {slides?.map((slide, index) =>
          <Slide
            key={index}
            slide={slide}
            currentSlide={currentIndex === index}
          />
          )}
      </Slider>

      <div className="slider-footer">
        <button className="btn" onClick={prevIndex}>
          &#10094;
        </button>

        <h5 className="counter">
          {currentIndex + 1} / {slides.length}
        </h5>

        <button className="btn" onClick={nextIndex}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

SliderContent.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({

    }),
  ).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default SliderContent;
