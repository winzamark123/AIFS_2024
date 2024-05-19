'use client';
import ImageUploader from '@/components/ImageUploader';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <div className="flex h-1/2 w-1/2 flex-col items-center gap-3 border border-slate-500">
        <ImageUploader />
        <div className="flex h-1/3 w-1/2 flex-col items-center border border-black"></div>

        <Textarea></Textarea>
        <Button>Submit</Button>
      </div>
    </main>
  );
}
