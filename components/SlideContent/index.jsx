import React from 'react';
import Uploader from '../Uploader';
import styles from './styles.module.css';


export default function SlideContent({title,children}){
  return (
    <div className={styles.SlideContent}>
      <h1>{title}</h1>
      <div className={styles.SlideBody}>
        <div className={styles.Left}>
          <Uploader/>
        </div>
        <div className={styles.Right}>
          {children}
        </div>
      </div>
    </div>
  );
}