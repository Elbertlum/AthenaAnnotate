import React, { PropTypes } from 'react';

const ControlButton = ({ handler, label }) => (
  <span>
    <button className="control-btn control-btn-default" onClick={handler}> {label} </button>
  </span>
);

ControlButton.propTypes = {
  label: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default ControlButton;