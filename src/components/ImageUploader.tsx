// ImageUploader.tsx
import React, { useRef } from 'react';

interface ImageUploaderProps {
  onFileSelected: (file: File) => void;
}

export default function ImageUploader({ onFileSelected }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelected(file);
    }
  };

  return (
    <main>
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        accept="image/*"
      />
    </main>
  );
}
