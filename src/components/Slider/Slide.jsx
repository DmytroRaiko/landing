import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ slide, currentSlide }) => (
  <div
    className={`slide__content ${currentSlide ? 'active' : ''}`}
    style={{
      borderRadius: slide.borderRadius,
      width: !currentSlide ? '250' : '350',
    }}
  >
    <h5 className="title text-center">
      {slide.title}
    </h5>
    <p className="text text-center">
      {slide.text}
    </p>
    <div
      className={`slide__background ${currentSlide ? 'active' : ''}`}
      style={{
        backgroundImage: `url(${slide.background})`,
        borderRadius: slide.borderRadius,
      }}
    />
  </div>
);

Slide.propTypes = {
  slide: PropTypes.shape({}).isRequired,
  currentSlide: PropTypes.bool.isRequired,
};

export default Slide;
