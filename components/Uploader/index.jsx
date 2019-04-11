import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import fetch from 'isomorphic-unfetch'
import styles from './styles.module.css';


export default function Uploader() {
  
  const onDrop = useCallback(acceptedFiles => {
    const formData = new FormData();
    console.log('accepted file ?', typeof acceptedFiles[0]);
    formData.append("file", acceptedFiles[0], acceptedFiles[0].name);
    fetch(" http://localhost:5000/upload", {
      method: "POST",
      body:formData
    }).catch(error => console.log('error?',error))
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className={styles.Uploader} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop your song here ...</p> :
          <p>Drag 'n' drop your song here, or click to select the file</p>
      }
    </div>
  )
}
