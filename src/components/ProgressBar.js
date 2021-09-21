import React from "react";
import './ProgressBar.css';

const ProgressBar = (props) => {
    const { info } = props;

    let infoPercentage

    if (info.length === 2 || info.length > 2) {
      infoPercentage = 100
    } else { 
      infoPercentage = (info.length / 2) * 100
    }
    
    
    
    const fillerStyles = {
    height: '100%',
    width: `${infoPercentage}%`,
    backgroundColor: "#00695c",
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="progress-container">
      <div style={fillerStyles}>
        <span className="progress-label">{`${infoPercentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
