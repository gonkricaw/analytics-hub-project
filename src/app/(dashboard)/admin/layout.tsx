"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("users");

  // Extract the last part of the path to determine the active tab
  useEffect(() => {
    const path = pathname.split("/").pop();
    if (
      path &&
      [
        "users",
        "ip-blocking",
        "terms",
        "email-templates",
        "configuration",
      ].includes(path)
    ) {
      setActiveTab(path);
    } else if (pathname.includes("/admin")) {
      setActiveTab("users"); // Default tab
    }
  }, [pathname]);

  const handleTabChange = (value: string) => {
    router.push(`/admin/${value}`);
  };

  return (
    <div className="container max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full mb-8"
      >
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="ip-blocking">IP Blocking</TabsTrigger>
          <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
          <TabsTrigger value="email-templates">Email Templates</TabsTrigger>
          <TabsTrigger value="configuration">System Config</TabsTrigger>
        </TabsList>
      </Tabs>

      <div>{children}</div>
    </div>
  );
}
