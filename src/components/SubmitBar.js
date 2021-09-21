import React, { useState } from 'react'

function SubmitBar(props) { 
    
    const [password, setPassword] = useState('')

    const secretPassowrd = ""

    return (
        <div>
            <label>
                Secret Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button onClick={() => props.handleUpload(props.selectedFile)}> Upload to S3</button>
        </div>
    )
}

export default SubmitBar
