import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import UploadImageToS3WithReactS3 from './UploadImageToS3WithReactS3';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const App = () => {

    const [info, setInfo] = useState([])

    
    return (
            <div className="container">
                <div className="header-container">
                    <h1 className="title">iUpload stuff</h1>
                </div>
                <div className="input-container">
                    <div>
                        <ProgressBar info={info} />
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faCloudUploadAlt} size="10x"/>
                    </div>
                    <UploadImageToS3WithReactS3 />
                </div>
            </div>
    )
}

export default App
