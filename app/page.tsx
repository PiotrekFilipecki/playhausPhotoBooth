// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import WebcamView from './components/WebCamView';
import CaptureButton from './components/CaptureButton';
import CustomAlert from './components/CustomAlert';
import PhotoList from './components/PhotoList';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWebcam, setShowWebcam] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAlert(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
    setShowWebcam(true);
  };

  const handleCapture = (imageSrc: string) => {
    setCapturedImages(prevImages => {
      const newImages = [imageSrc, ...prevImages];
      return newImages.slice(0, 5); // Keep only the last 5 images
    });
  };

  return (
    <main className={styles.main}>
      {isLoading ? (
        <Loader />
      ) : showWebcam ? (
        <WebcamView onCapture={handleCapture} />
      ) : (
        <CaptureButton onClick={handleStartClick} />
      )}
      {showAlert && <CustomAlert onConfirm={handleAlertConfirm} />}
      <PhotoList images={capturedImages} />
    </main>
  );
}