import React from "react";
import 'ProgressBar.css';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  const { bgcolor, completed } = props;
  return (
    <div className="container">
      <div style={fillerStyles}>
        <span className="label">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
