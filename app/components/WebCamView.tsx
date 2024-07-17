// app/components/WebcamView.tsx
'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import styles from './WebcamView.module.css';

interface WebcamViewProps {
  onCapture: (imageSrc: string) => void;
}

export default function WebcamView({ onCapture }: WebcamViewProps) {
  const webcamRef = useRef<Webcam>(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsButtonVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setIsButtonVisible(false);
      setTimeout(() => {
        onCapture(imageSrc);
        setIsButtonVisible(true);
      }, 300);
    }
  }, [onCapture]);

  return (
    <div className={styles.webcamContainer}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: 'user' }}
        className={styles.webcam}
      />
      <button 
        onClick={capture} 
        className={`${styles.captureButton} ${isButtonVisible ? styles.visible : styles.hidden}`}
      >
       SHOOT
      </button>
    </div>
  );
}