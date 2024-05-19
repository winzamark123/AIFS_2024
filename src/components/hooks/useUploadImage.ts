import { useState } from 'react';

export default function useUploadImage() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<void> => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Adjust the URL to your API endpoint
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setImage(data.imageUrl); // Assuming API returns the URL of the uploaded image
        setResponse(`Disease Type: ${data.result}`); // Handle any additional message
      } else {
        throw new Error(data.message || 'Failed to upload image');
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      setResponse(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    image,
    loading,
    response,
    uploadImage,
  };
}
