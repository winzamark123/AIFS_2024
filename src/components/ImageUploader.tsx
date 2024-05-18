import React, { useRef } from 'react';
import useUploadImage from './hooks/useUploadImage';

export default function ImageUploader() {
    const { uploadImage, image, loading } = useUploadImage();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            uploadImage(file);
        }
    };

    return (
        <main>
            <input type='file' onChange={handleFileChange} ref={fileInputRef} accept="image/*" />
            {loading && <p>Loading...</p>}
            {image && <img src={image} alt="Uploaded" />}
        </main>
    );
};

