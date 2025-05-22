import { Metadata } from "next";
import ContentManagement from "@/components/admin/content-management/ContentManagement";

export const metadata: Metadata = {
  title: "Content Management",
  description: "Manage content for the Indonet Analytics Hub",
};

export default function ContentManagementPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Content Management</h1>
      <ContentManagement />
    </div>
  );
}
