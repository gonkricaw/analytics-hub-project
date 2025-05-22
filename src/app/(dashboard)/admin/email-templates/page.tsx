"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { PencilIcon, EyeIcon } from "@heroicons/react/24/outline";
import { SanitizedHTML } from "@/components/ui/sanitized-html";

type EmailTemplate = {
  id: string;
  template_type: string;
  subject: string;
  body_html: string;
  is_custom: boolean;
  created_at: string;
  updated_at: string;
};

const templateTypeNames: Record<string, string> = {
  user_invitation: "User Invitation",
  password_reset: "Password Reset",
  system_warning: "System Warning",
};

export default function EmailTemplatesAdminPage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const [selectedTemplate, setSelectedTemplate] =
    useState<EmailTemplate | null>(null);

  // Form fields for editing templates
  const [templateForm, setTemplateForm] = useState({
    subject: "",
    body_html: "",
  });

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await fetch("/api/admin/email-templates");

      if (!response.ok) {
        throw new Error("Failed to fetch email templates");
      }

      const data = await response.json();
      setTemplates(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching templates:", error);
      toast.error("Failed to load email templates.");
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTemplateForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditTemplate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTemplate) return;

    if (!templateForm.subject || !templateForm.body_html) {
      toast.error("All fields are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/admin/email-templates/${selectedTemplate.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(templateForm),
        },
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to update email template");
      }

      toast.success("Email template updated successfully.");
      setIsEditDialogOpen(false);

      // Refresh templates list
      fetchTemplates();
    } catch (error) {
      console.error("Error updating template:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update email template",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetTemplate = async (templateId: string) => {
    try {
      const response = await fetch(
        `/api/admin/email-templates/${templateId}/reset`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to reset email template");
      }

      toast.success("Email template reset successfully.");

      // Refresh templates list
      fetchTemplates();
    } catch (error) {
      console.error("Error resetting template:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to reset email template",
      );
    }
  };

  const openEditDialog = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setTemplateForm({
      subject: template.subject,
      body_html: template.body_html,
    });
    setIsEditDialogOpen(true);
  };

  const openPreviewDialog = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setIsPreviewDialogOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getTemplateTypeName = (type: string) => {
    return templateTypeNames[type] || type;
  };

  const filteredTemplates =
    activeTab === "all"
      ? templates
      : activeTab === "custom"
        ? templates.filter((t) => t.is_custom)
        : templates.filter((t) => !t.is_custom);

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
        <h2 className="text-2xl font-semibold">Email Templates</h2>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full mb-6"
      >
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
          <TabsTrigger value="default">Default</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Manage Email Templates</CardTitle>
          <CardDescription>
            Customize email templates for various system communications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredTemplates.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Template Type</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTemplates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell className="font-medium">
                      {getTemplateTypeName(template.template_type)}
                    </TableCell>
                    <TableCell>{template.subject}</TableCell>
                    <TableCell>
                      {template.is_custom ? (
                        <span className="text-amber-500 font-medium">
                          Custom
                        </span>
                      ) : (
                        <span className="text-blue-500 font-medium">
                          Default
                        </span>
                      )}
                    </TableCell>
                    <TableCell>{formatDate(template.updated_at)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => openPreviewDialog(template)}
                          title="Preview"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => openEditDialog(template)}
                          title="Edit"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                        {template.is_custom && (
                          <Button
                            variant="outline"
                            onClick={() => handleResetTemplate(template.id)}
                            title="Reset to Default"
                            size="sm"
                          >
                            Reset
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              No email templates found.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Email Template</DialogTitle>
            <DialogDescription>
              Customize the{" "}
              {selectedTemplate &&
                getTemplateTypeName(selectedTemplate.template_type)}{" "}
              template.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditTemplate}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-subject">Subject</Label>
                <Input
                  id="edit-subject"
                  name="subject"
                  value={templateForm.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-body">Content (HTML)</Label>
                <Textarea
                  id="edit-body"
                  name="body_html"
                  value={templateForm.body_html}
                  onChange={handleInputChange}
                  rows={10}
                  required
                  className="font-mono text-sm"
                />
              </div>
              <div className="bg-slate-800 border rounded p-4">
                <h3 className="text-sm font-medium mb-2">
                  Available Variables:
                </h3>
                <ul className="text-sm space-y-1 text-slate-300">
                  <li>
                    <code>{{ name }}</code> - Recipient's name
                  </li>
                  <li>
                    <code>{{ email }}</code> - Recipient's email
                  </li>
                  <li>
                    <code>{{ link }}</code> - Action link (reset password, etc.)
                  </li>
                  <li>
                    <code>{{ temp_password }}</code> - Temporary password (for
                    invitations)
                  </li>
                </ul>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
              >
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

      {/* Preview Dialog */}
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Preview Email Template</DialogTitle>
            <DialogDescription>
              {selectedTemplate &&
                getTemplateTypeName(selectedTemplate.template_type)}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-1">Subject:</h3>
              <p className="p-2 border rounded">{selectedTemplate?.subject}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Body:</h3>
              <div className="border rounded p-4 bg-white text-black overflow-y-auto max-h-[50vh]">
                {selectedTemplate && (
                  <SanitizedHTML content={selectedTemplate.body_html} />
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsPreviewDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
