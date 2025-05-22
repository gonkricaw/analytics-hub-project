'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { Spinner } from '@/components/ui/spinner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';
import { Bell, Plus } from 'lucide-react';

type Notification = {
  id: string;
  title: string;
  content_type: string;
  content_data: string;
  created_at: string;
  created_by: {
    id: string;
    name: string;
  };
  _count: {
    userStatuses: number;
  };
};

type PaginatedResponse = {
  notifications: Notification[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
  };
};

export default function AdminNotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Form state
  const [title, setTitle] = useState('');
  const [contentType, setContentType] = useState('text');
  const [contentData, setContentData] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const fetchNotifications = async (pageNum: number) => {
    try {
      setLoading(true);
      
      const response = await fetch(`/api/admin/notifications?page=${pageNum}&limit=10`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }
      
      const data: PaginatedResponse = await response.json();
      setNotifications(data.notifications);
      setTotalPages(data.pagination.totalPages);
      setPage(data.pagination.page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      toast.error('Failed to load notifications');
    } finally {
      setLoading(false);
    }
  };

  // Initialize on component mount
  useEffect(() => {
    fetchNotifications(page);
  }, []);
  
  // Handle pagination
  const goToPage = (pageNum: number) => {
    fetchNotifications(pageNum);
  };
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !contentData) {
      toast.error('Please fill all required fields');
      return;
    }
    
    try {
      setSubmitting(true);
      
      const response = await fetch('/api/admin/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          content_type: contentType,
          content_data: contentData
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to create notification');
      }
      
      toast.success('Notification created successfully');
      
      // Reset form and close dialog
      setTitle('');
      setContentType('text');
      setContentData('');
      setIsDialogOpen(false);
      
      // Refresh notifications list
      fetchNotifications(1);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to create notification');
    } finally {
      setSubmitting(false);
    }
  };
  
  const truncateText = (text: string, maxLength: number = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-primary" />
            <div>
              <CardTitle>Notification Management</CardTitle>
              <CardDescription>Create and manage system notifications</CardDescription>
            </div>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Notification
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Create New Notification</DialogTitle>
                <DialogDescription>
                  Create a new notification to be sent to all users.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Notification Title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content-type">Content Type</Label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                      <SelectItem value="image_url">Image URL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content-data">Content</Label>
                  {contentType === 'html' ? (
                    <div className="border rounded-md">
                      <RichTextEditor content={contentData} onChange={setContentData} />
                    </div>
                  ) : contentType === 'image_url' ? (
                    <div>
                      <Input 
                        id="content-data" 
                        value={contentData}
                        onChange={(e) => setContentData(e.target.value)}
                        placeholder="Enter image URL"
                        required
                      />
                      {contentData && (
                        <div className="mt-2">
                          <img 
                            src={contentData} 
                            alt="Preview" 
                            className="max-h-[100px] rounded-md object-contain" 
                            onError={() => toast.error("Error loading image preview")}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Textarea 
                      id="content-data" 
                      value={contentData}
                      onChange={(e) => setContentData(e.target.value)}
                      placeholder="Notification content"
                      rows={5}
                      required
                    />
                  )}
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? <Spinner size="sm" className="mr-2" /> : null}
                    Create Notification
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-12">
              <Spinner size="lg" />
            </div>
          ) : error ? (
            <div className="p-4 bg-destructive/10 rounded-md text-center text-destructive">
              {error}
            </div>
          ) : notifications.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No notifications to display.
            </div>
          ) : (
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Created By</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Recipients</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell className="font-medium">{notification.title}</TableCell>
                      <TableCell>{notification.content_type}</TableCell>
                      <TableCell>{truncateText(notification.content_data)}</TableCell>
                      <TableCell>{notification.created_by.name}</TableCell>
                      <TableCell>
                        {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                      </TableCell>
                      <TableCell className="text-right">
                        {notification._count.userStatuses}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                  >
                    Previous
                  </Button>
                  <span className="flex items-center px-2">
                    Page {page} of {totalPages}
                  </span>
                  <Button 
                    variant="outline" 
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
