import React, { useState } from 'react'

function SubmitBar() { 
    const [password, setPassword] = useState('')

    const uploadFile = () => {
        
    }

    return (
        <div>
            <label>
                Secret Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button className="submit-button" onSubmit={uploadFile}>Submit</button>
        </div>
    )
}

export default SubmitBar
