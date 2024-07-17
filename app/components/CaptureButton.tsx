// app/components/CaptureButton.tsx
import { useState, useEffect } from 'react';
import styles from './CaptureButton.module.css';

interface CaptureButtonProps {
  onClick: () => void;
}

export default function CaptureButton({ onClick }: CaptureButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(onClick, 300); // Wait for the hide animation to complete
  };

  return (
    <button 
      onClick={handleClick} 
      className={`${styles.captureButton} ${isVisible ? styles.visible : styles.hidden}`}
    >
      This is not a stripclub
    </button>
  );
}