import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indonet Analytics Hub - Dashboard",
  description: "Dashboard for Indonet Analytics Hub",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
