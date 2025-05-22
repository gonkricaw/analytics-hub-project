'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import ContentForm from './ContentForm';
import { DeleteConfirmDialog } from '../menu-management/DeleteConfirmDialog';
import { PlusIcon, PencilIcon, TrashIcon, SearchIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

type Content = {
  id: string;
  title: string;
  type: 'html' | 'image' | 'youtube' | 'document' | 'external_link_embed';
  content_data: string;
  created_at: string;
  updated_at: string;
  created_by_user: {
    id: string;
    name: string;
  };
};

type PaginationInfo = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
};

export default function ContentManagement() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState<Content | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState<string | null>(null);
  
  // Pagination and filtering
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 10,
    totalCount: 0,
    totalPages: 0
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [contentType, setContentType] = useState('');

  // Fetch content items
  const fetchContents = async () => {
    try {
      setLoading(true);
      
      // Build query parameters
      const params = new URLSearchParams();
      params.append('page', pagination.page.toString());
      params.append('limit', pagination.limit.toString());
      
      if (searchTerm) {
        params.append('search', searchTerm);
      }
      
      if (contentType) {
        params.append('type', contentType);
      }
      
      const response = await fetch(`/api/admin/content?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch content items');
      }
      
      const data = await response.json();
      setContents(data.contents);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      toast.error('Failed to fetch content items');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents();
  }, [pagination.page, pagination.limit]);

  const handleSearch = () => {
    // Reset to page 1 when searching
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchContents();
  };

  const handleAddContent = () => {
    setCurrentContent(null);
    setIsFormOpen(true);
  };

  const handleEditContent = (content: Content) => {
    setCurrentContent(content);
    setIsFormOpen(true);
  };

  const handleDeleteContent = (id: string) => {
    setContentToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!contentToDelete) return;
    
    try {
      const response = await fetch(`/api/admin/content/${contentToDelete}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete content');
      }
      
      toast.success('Content deleted successfully');
      fetchContents();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to delete content');
    } finally {
      setIsDeleteDialogOpen(false);
      setContentToDelete(null);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setCurrentContent(null);
  };

  const handleFormSubmit = () => {
    fetchContents();
    setIsFormOpen(false);
    setCurrentContent(null);
  };

  // Helper function to get content type display
  const getContentTypeDisplay = (type: string) => {
    switch (type) {
      case 'html': return 'HTML Content';
      case 'image': return 'Image';
      case 'youtube': return 'YouTube Video';
      case 'document': return 'Document';
      case 'external_link_embed': return 'External Link Embed';
      default: return type;
    }
  };

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${formatDistanceToNow(date, { addSuffix: true })}`;
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= pagination.totalPages) {
      setPagination(prev => ({ ...prev, page: newPage }));
    }
  };

  if (loading && contents.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error && contents.length === 0) {
    return (
      <div className="bg-destructive/20 p-4 rounded-md">
        <p className="text-destructive">Error: {error}</p>
        <Button 
          onClick={() => fetchContents()} 
          variant="outline" 
          className="mt-2"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Content Items</h2>
        <Button onClick={handleAddContent}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Content
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Input
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <Select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="html">HTML Content</option>
            <option value="image">Image</option>
            <option value="youtube">YouTube Video</option>
            <option value="document">Document</option>
            <option value="external_link_embed">External Link Embed</option>
          </Select>
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No content items found
                </TableCell>
              </TableRow>
            ) : (
              contents.map((content) => (
                <TableRow key={content.id}>
                  <TableCell className="font-medium">{content.title}</TableCell>
                  <TableCell>{getContentTypeDisplay(content.type)}</TableCell>
                  <TableCell>{content.created_by_user.name}</TableCell>
                  <TableCell>{formatDate(content.updated_at)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2 justify-end">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEditContent(content)}
                        className="h-8 w-8 p-0"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => handleDeleteContent(content.id)}
                        className="h-8 w-8 p-0"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
            {Math.min(pagination.page * pagination.limit, pagination.totalCount)} of{" "}
            {pagination.totalCount} entries
          </p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
            >
              Previous
            </Button>
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
              .filter(page => {
                // Show first, last, current, and pages close to current
                return (
                  page === 1 ||
                  page === pagination.totalPages ||
                  Math.abs(page - pagination.page) <= 1
                );
              })
              .map((page, index, array) => {
                // Add ellipsis between non-consecutive pages
                const showEllipsis = index > 0 && page - array[index - 1] > 1;
                return (
                  <div key={page} className="flex items-center">
                    {showEllipsis && (
                      <span className="px-2">...</span>
                    )}
                    <Button
                      size="sm"
                      variant={page === pagination.page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  </div>
                );
              })}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {isFormOpen && (
        <ContentForm
          content={currentContent}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}

      <DeleteConfirmDialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Content"
        description="Are you sure you want to delete this content item? This action cannot be undone. Any menu items referencing this content will need to be updated separately."
      />
    </div>
  );
}
