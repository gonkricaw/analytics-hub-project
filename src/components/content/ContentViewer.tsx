'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { SanitizedHTML } from '@/components/ui/sanitized-html';
import { toast } from 'sonner';

type Content = {
  id: string;
  title: string;
  type: 'html' | 'image' | 'youtube' | 'document' | 'external_link_embed';
  content_data: string;
  created_at: string;
  updated_at: string;
};

export default function ContentViewer({ id }: { id: string }) {
  const router = useRouter();
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/content/${id}`);
        
        if (response.status === 401) {
          // Handle authentication required (redirect to login)
          const data = await response.json();
          if (data.redirectToLogin) {
            // Store the original URL to redirect back after login
            const currentPath = window.location.pathname;
            sessionStorage.setItem('redirectAfterLogin', currentPath);
            router.push('/login');
            return;
          }
        }
        
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        toast.error('Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchContent();
    }
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="bg-destructive/20 p-4 rounded-md">
        <p className="text-destructive">
          {error || 'Content not found'}
        </p>
      </div>
    );
  }

  // Render content based on type
  const renderContent = () => {
    switch (content.type) {
      case 'html':
        return (
          <div className="prose prose-invert max-w-none">
            <SanitizedHTML html={content.content_data} />
          </div>
        );
      
      case 'image':
        return (
          <div className="flex justify-center">
            <img 
              src={content.content_data} 
              alt={content.title}
              className="max-w-full h-auto rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/placeholder-image.png';
              }}
            />
          </div>
        );
        
      case 'youtube':
        const videoId = content.content_data.replace(/.*v=/, '').split('&')[0];
        return (
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        );
          
      case 'document':
        return (
          <div className="aspect-[4/3] w-full">
            <iframe
              width="100%"
              height="100%"
              src={content.content_data}
              title={content.title}
              className="rounded-md"
            ></iframe>
          </div>
        );
          
      case 'external_link_embed':
        return (
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={content.content_data}
              title={content.title}
              frameBorder="0"
              className="rounded-md"
            ></iframe>
          </div>
        );
          
      default:
        return (
          <div className="p-4 bg-muted rounded-md">
            <p>Unknown content type: {content.type}</p>
          </div>
        );
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
        <div className="mt-4">
          {renderContent()}
        </div>
      </div>
    </Card>
  );
}
