'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';
import { PlusIcon, PencilIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { SanitizedHTML } from '@/components/ui/sanitized-html';

type TermsAndConditions = {
  id: string;
  content_html: string;
  version: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export default function TermsAdminPage() {
  const [termsList, setTermsList] = useState<TermsAndConditions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPublishDialogOpen, setIsPublishDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [selectedTerms, setSelectedTerms] = useState<TermsAndConditions | null>(null);
  
  // Form fields for creating/editing terms
  const [termsForm, setTermsForm] = useState({
    version: '',
    content_html: '',
  });
  
  useEffect(() => {
    fetchTerms();
  }, []);
  
  const fetchTerms = async () => {
    try {
      const response = await fetch('/api/admin/terms-and-conditions');
      
      if (!response.ok) {
        throw new Error('Failed to fetch terms and conditions');
      }
      
      const data = await response.json();
      setTermsList(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching terms:', error);
      toast.error('Failed to load terms and conditions.');
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTermsForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCreateTerms = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!termsForm.version || !termsForm.content_html) {
      toast.error('All fields are required.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/admin/terms-and-conditions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(termsForm),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create terms and conditions');
      }
      
      toast.success('Terms and conditions created successfully.');
      setIsCreateDialogOpen(false);
      
      // Reset the form
      setTermsForm({
        version: '',
        content_html: '',
      });
      
      // Refresh terms list
      fetchTerms();
    } catch (error) {
      console.error('Error creating terms:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create terms and conditions');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleEditTerms = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTerms) return;
    
    if (!termsForm.version || !termsForm.content_html) {
      toast.error('All fields are required.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`/api/admin/terms-and-conditions/${selectedTerms.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(termsForm),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to update terms and conditions');
      }
      
      toast.success('Terms and conditions updated successfully.');
      setIsEditDialogOpen(false);
      
      // Refresh terms list
      fetchTerms();
    } catch (error) {
      console.error('Error updating terms:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to update terms and conditions');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handlePublishTerms = async () => {
    if (!selectedTerms) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`/api/admin/terms-and-conditions/${selectedTerms.id}/publish`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to publish terms and conditions');
      }
      
      toast.success('Terms and conditions published successfully.');
      setIsPublishDialogOpen(false);
      
      // Refresh terms list
      fetchTerms();
    } catch (error) {
      console.error('Error publishing terms:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to publish terms and conditions');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const openEditDialog = (terms: TermsAndConditions) => {
    setSelectedTerms(terms);
    setTermsForm({
      version: terms.version,
      content_html: terms.content_html,
    });
    setIsEditDialogOpen(true);
  };
  
  const openPublishDialog = (terms: TermsAndConditions) => {
    setSelectedTerms(terms);
    setIsPublishDialogOpen(true);
  };
  
  const openPreviewDialog = (terms: TermsAndConditions) => {
    setSelectedTerms(terms);
    setIsPreviewDialogOpen(true);
  };
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleString();
  };
  
  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Terms and Conditions</h2>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusIcon className="h-4 w-4" />
              Create New Version
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>New Terms and Conditions</DialogTitle>
              <DialogDescription>
                Create a new version of the terms and conditions.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateTerms}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="version">Version</Label>
                  <Input
                    id="version"
                    name="version"
                    placeholder="1.0"
                    value={termsForm.version}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content_html">Content (HTML)</Label>
                  <Textarea
                    id="content_html"
                    name="content_html"
                    placeholder="<h1>Terms and Conditions</h1><p>Your terms content here...</p>"
                    value={termsForm.content_html}
                    onChange={handleInputChange}
                    rows={10}
                    required
                    className="font-mono text-sm"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Spinner className="mr-2" size="sm" /> : null}
                  Create
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Terms and Conditions</CardTitle>
          <CardDescription>
            Create, edit, and publish terms and conditions for users to accept.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {termsList.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Published</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {termsList.map((terms) => (
                  <TableRow key={terms.id}>
                    <TableCell className="font-medium">{terms.version}</TableCell>
                    <TableCell>
                      {terms.published_at ? (
                        <span className="text-green-500 font-medium">Published</span>
                      ) : (
                        <span className="text-amber-500 font-medium">Draft</span>
                      )}
                    </TableCell>
                    <TableCell>{formatDate(terms.created_at)}</TableCell>
                    <TableCell>{formatDate(terms.published_at)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => openPreviewDialog(terms)}
                          title="Preview"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                        {!terms.published_at && (
                          <>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => openEditDialog(terms)}
                              title="Edit"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => openPublishDialog(terms)}
                              title="Publish"
                            >
                              <CheckCircleIcon className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              No terms and conditions found.
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Terms and Conditions</DialogTitle>
            <DialogDescription>
              Update this version of the terms and conditions.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditTerms}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-version">Version</Label>
                <Input
                  id="edit-version"
                  name="version"
                  value={termsForm.version}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-content">Content (HTML)</Label>
                <Textarea
                  id="edit-content"
                  name="content_html"
                  value={termsForm.content_html}
                  onChange={handleInputChange}
                  rows={10}
                  required
                  className="font-mono text-sm"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner className="mr-2" size="sm" /> : null}
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Publish Dialog */}
      <Dialog open={isPublishDialogOpen} onOpenChange={setIsPublishDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publish Terms and Conditions</DialogTitle>
            <DialogDescription>
              Are you sure you want to publish version {selectedTerms?.version}? This will make it the active terms that all users must accept.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPublishDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handlePublishTerms}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? <Spinner className="mr-2" size="sm" /> : null}
              Publish
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Preview Terms and Conditions</DialogTitle>
            <DialogDescription>
              Version {selectedTerms?.version}
            </DialogDescription>
          </DialogHeader>
          <div className="my-4 overflow-y-auto max-h-[50vh] p-4 border rounded bg-slate-800">
            {selectedTerms && (
              <SanitizedHTML content={selectedTerms.content_html} />
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsPreviewDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
