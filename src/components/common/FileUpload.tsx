'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { UploadIcon, XIcon } from 'lucide-react';

interface FileUploadProps {
  onUploadComplete: (fileUrl: string, fileName: string) => void;
  accept?: string;
  maxSizeMB?: number;
}

export default function FileUpload({
  onUploadComplete,
  accept = "image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/plain",
  maxSizeMB = 10
}: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const maxSizeBytes = maxSizeMB * 1024 * 1024; // Convert MB to bytes

  const handleFileChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Check file size
      if (file.size > maxSizeBytes) {
        toast.error(`File size exceeds the ${maxSizeMB}MB limit`);
        return;
      }

      setIsUploading(true);
      setFileName(file.name);

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreview(fileReader.result as string);
        };
        fileReader.readAsDataURL(file);
      } else {
        // For non-image files, clear any existing preview
        setPreview(null);
      }

      // Create form data
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Upload failed');
        }

        const data = await response.json();
        toast.success('File uploaded successfully');
        onUploadComplete(data.url, file.name);
      } catch (err) {
        toast.error(err instanceof Error ? err.message : 'Upload failed');
        setPreview(null);
        setFileName('');
      } finally {
        setIsUploading(false);
      }
    },
    [maxSizeBytes, maxSizeMB, onUploadComplete]
  );

  const clearUpload = () => {
    setPreview(null);
    setFileName('');
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => document.getElementById('fileInput')?.click()}
          disabled={isUploading}
          className="flex gap-2"
        >
          {isUploading ? (
            <Spinner size="sm" className="mr-2" />
          ) : (
            <UploadIcon className="h-4 w-4" />
          )}
          {isUploading ? 'Uploading...' : 'Upload File'}
        </Button>
        
        <input
          id="fileInput"
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          disabled={isUploading}
        />
        
        {fileName && (
          <div className="flex items-center gap-2 text-sm">
            <span className="truncate max-w-[200px]">{fileName}</span>
            {!isUploading && (
              <button
                type="button"
                onClick={clearUpload}
                className="text-destructive hover:text-destructive/80"
                title="Remove file"
              >
                <XIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
      
      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="max-h-[200px] rounded-md object-contain"
          />
        </div>
      )}
    </div>
  );
}
