import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import SubmitBar from './SubmitBar';


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

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return ( selectedFile ? 
    <div>
        <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
        <SubmitBar handleUpload={handleUpload} selectedFile={selectedFile} />
    </div> 
    : 
    <div>
    <div>React S3 File Upload</div>
        <input type="file" onChange={handleFileInput}/>
    </div>
    )
}

export default UploadImageToS3WithReactS3;