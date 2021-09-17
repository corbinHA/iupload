import React, { useState } from 'react';
import SubmitBar from './SubmitBar';
import ProgressBar from './ProgressBar';

const App = () => {

    const [ info, setInfo ] = useState([])


    return (
        <div className="container">
            <div className="header-container">
                <h1 className="title">iUpload stuff</h1>
            </div>
        </div>
    )
}

export default App
