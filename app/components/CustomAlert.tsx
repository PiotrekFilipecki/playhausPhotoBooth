/* eslint-disable react/no-unescaped-entities */
// app/components/CustomAlert.tsx
import { useState, useEffect } from 'react';
import styles from './CustomAlert.module.css';

interface CustomAlertProps {
  onConfirm: () => void;
}

export default function CustomAlert({ onConfirm }: CustomAlertProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleConfirm = () => {
    setIsVisible(false);
    setTimeout(onConfirm, 300);
  };

  return (
    <div className={`${styles.alertOverlay} ${isVisible ? styles.visible : ''}`}>
      <div className={`${styles.alertContent} ${isVisible ? styles.visible : ''}`}>
        <h2>Don't shoot yourself</h2>
        <p>We will.</p>
        <button 
          onClick={handleConfirm}
          className={`${styles.confirmButton} ${isVisible ? styles.visible : styles.hidden}`}
        >
          OK
        </button>
      </div>
    </div>
  );
}