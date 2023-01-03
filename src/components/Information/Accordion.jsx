import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ list, activeIndex, changeActive }) => {
  const accordionList = list?.map((accordion, key) => (
    <div
      className={`accordion__item ${activeIndex === key ? 'active' : ''}`}
      key={`accordion-${key}`}
    >
      <div className="accordion__header">
        <h5 className="title">{accordion.title}</h5>

        <button onClick={() => changeActive(key)}>
          <i>
            {activeIndex === key ? '–' : '+'}
          </i>
        </button>
      </div>

      <div className="text">{accordion.text}</div>
    </div>
  ));

  return (
    <div className="accordion__list">
      {accordionList}
    </div>
  );
};

Accordion.propTypes = {
  activeIndex: PropTypes.number,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired
};

Accordion.defaultProps = {
  activeIndex: 1,
}

export default Accordion;
