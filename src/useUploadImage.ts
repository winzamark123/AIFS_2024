import { useState } from 'react';

export default function useUploadImage() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const uploadImage = async (file: File): Promise<void> => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Adjust the URL to your API endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (typeof data.imageUrl === 'string') {
        setImage(data.imageUrl); // Assuming API returns the URL of the uploaded image
      } else {
        throw new Error('Invalid data received from API');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    image,
    loading,
    uploadImage,
  };
}
