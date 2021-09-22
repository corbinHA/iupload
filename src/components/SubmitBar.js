import React, { useState } from 'react'
import "./SubmitBar.css"

const SubmitBar = (props) => { 
    const [password, setPassword] = useState('');

    const { handleUpload, selectedFile } = props

    const secretPassword = "password";

    const handleSubmit = async () => {
        if (password !== secretPassword) {
            alert("Passwords don't match");
        } else {
            handleUpload(selectedFile)
            .then(alert("Image Sent to the clouds"))
            .then(window.location.reload(false))
        }
    }  

    return (
        <div className="submit-container">
            <label className="password-label">
                Password:
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button className="submit-button" onClick={handleSubmit}> Upload to the clouds</button>
        </div>
    )
}

export default SubmitBar
