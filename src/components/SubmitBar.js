import React, { useState } from 'react'

const SubmitBar = (props) => { 
    
    const [password, setPassword] = useState('');

    const secretPassword = "ksda5646@#$#hfkjahs9674kldjf45ha;kljshndfk546jAHSJKD8768HLFA";

    const handleSubmit = () => {
        if (password !== secretPassword) {
            alert("Passwords don't match");
        } else {
            props.handleUpload(props.selectedFile);
            alert("Image Sent to the clouds");
        }
    }  

    return (
        <div>
            <label>
                Secret Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button onClick={handleSubmit}> Upload to S3</button>
        </div>
    )
}

export default SubmitBar
