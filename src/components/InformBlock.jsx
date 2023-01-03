import React from 'react';
import PropTypes from 'prop-types';

const InformBlock = ({ title, text, children }) => {
  return (
    <div className="info-block">
      <h2>
        {title}
      </h2>
      <p>
        {text}
      </p>

      {children && (
        <div className="buttons">{children}</div>
        )}
    </div>
  );
};

InformBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InformBlock;
