'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import FileUpload from '@/components/common/FileUpload';

type Content = {
  id: string;
  title: string;
  type: 'html' | 'image' | 'youtube' | 'document' | 'external_link_embed';
  content_data: string;
  created_at?: string;
  updated_at?: string;
  created_by_user?: {
    id: string;
    name: string;
  };
};

type ContentFormProps = {
  content: Content | null;
  onClose: () => void;
  onSubmit: () => void;
};

export default function ContentForm({
  content,
  onClose,
  onSubmit
}: ContentFormProps) {
  const [formData, setFormData] = useState<{
    title: string;
    type: 'html' | 'image' | 'youtube' | 'document' | 'external_link_embed';
    content_data: string;
  }>({
    title: '',
    type: 'html',
    content_data: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');
  
  // Initialize form data if editing
  useEffect(() => {
    if (content) {
      setFormData({
        title: content.title,
        type: content.type,
        content_data: content.content_data
      });
      
      if (content.type === 'html') {
        setHtmlContent(content.content_data);
      }
    }
  }, [content]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as 'html' | 'image' | 'youtube' | 'document' | 'external_link_embed';
    setFormData({
      ...formData,
      type: newType,
      content_data: newType === 'html' ? htmlContent : formData.content_data
    });
  };
  
  const handleHtmlChange = (html: string) => {
    setHtmlContent(html);
    setFormData({
      ...formData,
      content_data: html
    });
  };
  // Handle file upload completion with the file URL
  const handleFileUpload = (fileUrl: string) => {
    setFormData({
      ...formData,
      content_data: fileUrl
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      let url = '/api/admin/content';
      let method = 'POST';
      
      if (content) {
        url = `/api/admin/content/${content.id}`;
        method = 'PUT';
      }
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save content');
      }
      
      toast.success(`Content ${content ? 'updated' : 'created'} successfully`);
      onSubmit();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to save content');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{content ? 'Edit Content' : 'Add New Content'}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
            <div>
            <Label htmlFor="content-type">Content Type</Label>
            <select
              id="content-type"
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="html">HTML Content</option>
              <option value="image">Image</option>
              <option value="youtube">YouTube Video</option>
              <option value="document">Document</option>
              <option value="external_link_embed">External Link Embed</option>
            </select>
          </div>
          
          {formData.type === 'html' ? (
            <div>
              <Label htmlFor="html-content">HTML Content</Label>
              <div className="border rounded-md mt-1">
                <RichTextEditor content={htmlContent} onChange={handleHtmlChange} />
              </div>
            </div>
          ): formData.type === 'image' || formData.type === 'document' ? (
            <div>
              <Label>Upload {formData.type === 'image' ? 'Image' : 'Document'}</Label>
              <div className="mt-1">                <FileUpload 
                  onUploadComplete={(url) => handleFileUpload(url)} 
                  accept={formData.type === 'image' ? "image/*" : "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"}
                />
              </div>
              <div className="mt-2">
                <Label htmlFor="content_data">Or provide a URL</Label>
                <Input
                  id="content_data"
                  name="content_data"
                  value={formData.content_data}
                  onChange={handleInputChange}
                  placeholder={`Enter ${formData.type === 'image' ? 'image' : 'document'} URL`}
                />
              </div>
              {formData.type === 'image' && formData.content_data && (
                <div className="mt-2">
                  <img 
                    src={formData.content_data} 
                    alt="Preview" 
                    className="max-h-[200px] rounded-md object-contain" 
                    onError={() => toast.error("Error loading image preview")}
                  />
                </div>
              )}
            </div>
          ) : (
            <div>
              <Label htmlFor="content_data">
                {formData.type === 'youtube' 
                  ? 'YouTube Video URL or Embed Code' 
                  : formData.type === 'external_link_embed' 
                    ? 'External URL to Embed' 
                    : 'Content Data'}
              </Label>
              <Textarea
                id="content_data"
                name="content_data"
                value={formData.content_data}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>
          )}
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : content ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
