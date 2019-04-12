import React, { useState } from 'react';
import Uploader from '../Uploader';
import Reader from '../Reader';
import styles from './styles.module.css';

export default function SlideContent({title,children}){
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div
      className={styles.SlideContent}
      style={{
        backgroundImage: uploadedFile ?
          `url('${uploadedFile.image}')` :
          ''
      }}
    >
      <h1>{title}</h1>
      <div className={styles.SlideBody}>
        {
          !uploadedFile && (
            <div>
              <Uploader onUploadedFile={setUploadedFile} />
            </div>
          )
        }
        {
          uploadedFile && (
            <div>
              <Reader src={uploadedFile.song} />
            </div>
          )
        }
      </div>
    </div>
  );
}
