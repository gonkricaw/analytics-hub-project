'use client';

import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Menu items - could be fetched from an API in a real app
  const menuItems = [
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'UI Showcase',
      href: '/ui-showcase',
    },
    {
      title: 'Analytics',
      children: [
        {
          title: 'Dashboard',
          href: '/analytics/dashboard',
          description: 'Overview of key metrics and performance indicators',
        },
        {
          title: 'Reports',
          href: '/analytics/reports',
          description: 'Detailed reports and data analysis',
        },
      ],
    },
    {
      title: 'Settings',
      children: [
        {
          title: 'Profile',
          href: '/settings/profile',
          description: 'Manage your account settings and preferences',
        },
        {
          title: 'Notifications',
          href: '/settings/notifications',
          description: 'Configure your notification preferences',
        },
      ],
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Navbar */}
      <Navbar 
        menuItems={menuItems}
        notifications={3}
        userName="Admin"
      />
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
