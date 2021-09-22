import React, { useState } from 'react';
import { uploadFile } from 'react-s3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { S3_BUCKET, REGION, ACCESS_KEY, SECRET_ACCESS_KEY } from '../ignoreme'

import ProgressBar from './ProgressBar';
import SubmitBar from './SubmitBar';
import "./App.css";

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    }

const App = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [username, setUsername] = useState('')
    const [info, setInfo] = useState({ selectedFile: null, username: false })

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        setInfo({...info, selectedFile: e.target.files[0]})
    }

    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
        setInfo({...info, username: e.target.value.length >= 5 })
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    console.log(selectedFile)
    
    
    return ( info.selectedFile && info.username ?
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
                            <input className="file-input" type="file" onChange={handleFileInput}/>
                        </div>
                        <div className="username-container">
                            <label className="username-label">
                                Username:
                                <input className="username-input" placeholder="Username1234" type="text" value={username} onChange={handleUsernameInput} />
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
                            <input className="file-input" type="file" onChange={handleFileInput}/>
                        </div>
                        <div className="username-container">
                            <label className="username-label">
                                Username:
                                <input className="username-input" placeholder="Username1234" type="text" value={username} onChange={handleUsernameInput} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default App
