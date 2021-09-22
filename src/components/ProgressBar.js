import React from "react";
import './ProgressBar.css';

const ProgressBar = (props) => {
    const { info } = props;

    let infoPercentage = 0

    console.log(info.username)

    if ( info.selectedFile && info.username ) {
      infoPercentage = 100
    } else if ( info.selectedFile || info.username ) { 
      infoPercentage = 50
    }
    
    
    
    const fillerStyles = {
    height: '100%',
    width: `${infoPercentage}%`,
    backgroundColor: "#00695c",
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'center'
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
