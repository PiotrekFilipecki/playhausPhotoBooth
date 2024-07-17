// app/components/PhotoList.tsx
import { useState } from 'react';
import styles from './PhotoList.module.css';
import ImageModal from './ImageModal';

interface PhotoListProps {
  images: string[];
}

export default function PhotoList({ images }: PhotoListProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.photoList}>
        {images.map((image, index) => (
          <div key={index} className={styles.photoItem} onClick={() => handleImageClick(image)}>
            <img src={image} alt={`Captured ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </>
  );
}