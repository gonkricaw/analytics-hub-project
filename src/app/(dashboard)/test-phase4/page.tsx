'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import FileUpload from '@/components/common/FileUpload';

export default function TestFunctionalityPage() {
  const [uploadedFiles, setUploadedFiles] = useState<{url: string, name: string}[]>([]);
  
  const handleFileUploadComplete = (fileUrl: string, fileName: string) => {
    setUploadedFiles(prev => [...prev, {url: fileUrl, name: fileName}]);
    toast.success(`File "${fileName}" uploaded successfully!`);
  };
  
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Phase 4 Feature Testing</h1>
      
      <div className="space-y-8">
        {/* Test File Upload */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">File Upload Testing</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Upload a File</h3>
              <FileUpload onUploadComplete={handleFileUploadComplete} />
            </div>
            
            {uploadedFiles.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Uploaded Files</h3>
                <ul className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-slate-900 rounded-md">
                      <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                      <a 
                        href={file.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm ml-auto"
                      >
                        View File
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>
        
        {/* Test Multi-Level Navigation */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Dynamic Navigation Testing</h2>
          <p className="mb-4">The DynamicNavbar has been integrated into the DashboardLayout and should now show:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Menu items based on user role</li>
            <li>Multi-level dropdowns with Framer Motion animations</li>
            <li>Menu access logging for analytics</li>
          </ul>
          <p className="mb-2">You can verify this by:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Opening the browser developer tools to see API calls to /api/menus</li>
            <li>Clicking on menu items to see smooth animations</li>
            <li>Checking the menu-access-log table for logged entries</li>
          </ol>
        </Card>
        
        {/* Test Embedded Content */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Embedded Content Testing</h2>
          <p className="mb-4">External Link Embed functionality is now implemented with:</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>UUIDv4 for secure content identification</li>
            <li>Authentication protection for embedded content</li>
            <li>Access control via middleware</li>
          </ul>
          <Button
            onClick={() => {
              toast.info("Test by creating an 'external_link_embed' content in the admin panel");
            }}
          >
            Learn More
          </Button>
        </Card>
      </div>
    </div>
  );
}
