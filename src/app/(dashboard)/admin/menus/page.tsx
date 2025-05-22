import { Metadata } from "next";
import MenuManagement from "@/components/admin/menu-management/MenuManagement";

export const metadata: Metadata = {
  title: "Menu Management",
  description: "Manage navigation menus for the Indonet Analytics Hub",
};

export default function MenuManagementPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Menu Management</h1>
      <MenuManagement />
    </div>
  );
}
