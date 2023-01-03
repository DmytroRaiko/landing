import React from 'react';
import SliderContent from "../../components/Slider";
import './slider.scss';
import SaveWater from "../../icons/save-water";
import PropTypes from "prop-types";
import Home from "../Home/Home";

function getRandomPercentage() {
  return Math.floor(Math.random() * 75) + 75;
}

const slidesList = [
  {
    title: 'Avoid plastic',
    text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    svg: null,
    borderRadius: `${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% / ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}%`,
    background: 'plastic.png',
  },
  {
    title: 'Choose organic',
    text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    svg: null,
    borderRadius: `${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% / ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}%`,
    background: 'organic.png',
  },
  {
    title: 'Save water',
    text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    svg: <SaveWater />,
    borderRadius: `${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% / ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}%`,
    background: 'water.png'
  },
  {
    title: 'Plant trees',
    text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    svg: null,
    borderRadius: `${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% / ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}%`,
    background: 'trees.png',
  },
  {
    title: 'Save energy',
    text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
    svg: null,
    borderRadius: `${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}% / ${getRandomPercentage()}% ${getRandomPercentage()}% ${getRandomPercentage()}%`,
    background: 'energy.png',
  },
];

const Slider = ({ isMobile }) => {
  return (
    <section className="slider">
      <SliderContent slides={slidesList} isMobile={isMobile} />
    </section>
  );
};

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Slider;
