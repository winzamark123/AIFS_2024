'use client';
import ImageUploader from '@/components/ImageUploader';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import useUploadImage from '@/components/hooks/useUploadImage';
import Image from 'next/image';

export default function Home() {
  const { image, loading, uploadImage, response } = useUploadImage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (selectedFile) {
      uploadImage(selectedFile);
    }
  };

  return (
    <main>
      <div className="flex h-1/2 w-1/2 flex-col items-center gap-3 border border-slate-500">
        <ImageUploader onFileSelected={setSelectedFile} />
        {loading && <p>Loading...</p>}
        {image && <Image src={image} alt="Uploaded" />}
        {response && <p>{response}</p>}
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </main>
  );
}
