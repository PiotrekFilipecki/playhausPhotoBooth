// app/components/ImageModal.tsx
import { useState, useEffect } from 'react';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, onClose }: ImageModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'photobooth_image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`${styles.modalOverlay} ${isVisible ? styles.visible : ''}`} onClick={handleClose}>
      <div className={`${styles.modalContent} ${isVisible ? styles.visible : ''}`} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Full size" className={styles.fullSizeImage} />
        <button className={styles.downloadButton} onClick={handleDownload}>Download</button>
        <button className={styles.closeButton} onClick={handleClose}>&times;</button>
      </div>
    </div>
  );
}