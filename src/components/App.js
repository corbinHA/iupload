import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

import ProgressBar from './ProgressBar';
import SubmitBar from './SubmitBar';
import "./App.css";

const S3_BUCKET = process.env.S3_BUCKET;
const REGION = process.env.REGION;
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    }

const App = () => {

    const [info, setInfo] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [username, setUsername] = useState('')

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        setInfo([...info, selectedFile])
    }

    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
        if (username.length > 3) {
            setInfo([...info, username])
        }
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    
    
    return ( selectedFile ?
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
                    <div className="upload-container">
                        <div className="upload-label">iUpload here</div>
                        <div className="file-container">
                            <input type="file" onChange={handleFileInput}/>
                        </div>
                        <div className="username-container">
                            <label className="username-label">
                                Username:
                                <input className="username-input" type="text" value={username} onChange={handleUsernameInput} />
                            </label>
                        </div>
                        <SubmitBar handleUpload={handleUpload} selectedFile={selectedFile} />
                    </div> 
                </div>
            </div>
            :
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
                    <div className="upload-container">
                        <div className="upload-label">iUpload Here</div>
                        <div className="file-container">
                            <input type="file" onChange={handleFileInput}/>
                        </div>
                        <div className="username-container">
                            <label className="username-label">
                                Username:
                                <input className="username-input" type="text" value={username} onChange={handleUsernameInput} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default App
