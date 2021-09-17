import React from "react";
import 'ProgressBar.css';

const ProgressBar = (props) => {
    const { completed } = props;

    const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#00695c",
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="container">
      <div style={fillerStyles}>
        <span className="label">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
