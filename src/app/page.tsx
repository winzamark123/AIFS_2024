'use client';
import ImageUploader from '@/components/ImageUploader';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import useUploadImage from '@/components/hooks/useUploadImage';
import Image from 'next/image';

export default function Home() {
  const { image, loading, uploadImage, response } = useUploadImage();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [advice, setAdvice] = useState<string | null>(null);
  const [query, setQuery] = useState<string>(
    'give me information on guava diseases'
  );

  // Function to fetch advice from your API
  const fetchAdvice = async (query: string) => {
    const response = await fetch(
      'https://farmerchat.farmstack.co/opensource-be/api/chat/get_answer_for_text_query/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_id: 'vwadhwa@ucdavis.edu',
          query: query,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data; // Adjust this according to the actual response structure
    } else {
      throw new Error('Failed to fetch advice');
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      await uploadImage(selectedFile);
      const adviceResponseDigiGreen = await fetchAdvice(query);
      console.log('adviceResponseDigiGreen', adviceResponseDigiGreen);

      if (response) {
        setQuery(query + response);
        setAdvice(adviceResponseDigiGreen.response);
        console.log('response', response);
        console.log('advice', advice);
      }
    }
  };

  return (
    <main className="flex items-center justify-center">
      <div className="flex h-1/2 w-1/2 flex-col items-center gap-3 border border-slate-500">
        <ImageUploader onFileSelected={setSelectedFile} />
        {loading && <p>Loading...</p>}
        {image && <Image src={image} alt="Uploaded" />}
        {response && <p>{response}</p>}
        {advice && <p>{advice}</p>}
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </main>
  );
}
