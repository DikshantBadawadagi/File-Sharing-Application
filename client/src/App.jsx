import React, { useRef } from 'react'
import { uploadFile } from './services/api';
import './App.css'
function App() {
const [file,setFile] = React.useState("");

const fileInputRef = useRef();
React.useEffect(() => {
const getImage = async () => {
  if(file){
    const data = new FormData();
    data.append("name",file.name);
    data.append("file",file);

   let response = await uploadFile(data);
  }
}
getImage();
},[file])

const onUploadClick = () => {
  fileInputRef.current.click();
} 


  return (
    <div className='container'>
    <div className='wrapper'>
      <div>
        <h1>Simple file sharing</h1>
        <p>Upload share and download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
        ref={fileInputRef}
        style={{display : 'none'}}
        onChange={(e) => setFile(e.target.files[0])}/>
      </div>
    </div>
    </div>
  )
}

export default App
