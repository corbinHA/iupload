import React, { useState } from 'react';
import SubmitBar from './SubmitBar';
import ProgressBar from './ProgressBar';

const App = () => {

    const [info, setInfo] = useState([])

    if (info.length === 3) {

    }
    return (info.length === 3 ?
        <div className="container">
            <div className="header-container">
                <h1 className="title">iUpload stuff</h1>
            </div>
            <div>
                <ProgressBar />
                <div>
                    cloud image here
                </div>
                <SubmitBar />
            </div>
        </div>
        :
        <div className="container">
            <div className="header-container">
                <h1 className="title">iUpload stuff</h1>
            </div>
            <div>
                <ProgressBar />
                <div>
                    cloud image here
                </div>

            </div>
        </div>
    )
}

export default App
