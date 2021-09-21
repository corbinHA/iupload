import React, { useState } from 'react';
import SubmitBar from './SubmitBar';
import ProgressBar from './ProgressBar';
import UploadImageToS3WithReactS3 from './UploadImageToS3WithReactS3';

const App = () => {

    const [info, setInfo] = useState([])

    
    return (
        <div className="container">
            <div className="header-container">
                <h1 className="title">iUpload stuff</h1>
            </div>
            <div>
                <ProgressBar info={info} />
                <div>
                    cloud image here
                </div>
                <UploadImageToS3WithReactS3 />
            </div>
        </div>
    )
}

export default App
