'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/home" className="text-xl font-bold">
              Indonet Analytics
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link 
                href="/home" 
                className={`${pathname === '/home' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </Link>
              <Link 
                href="/ui-showcase" 
                className={`${pathname === '/ui-showcase' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
              >
                UI Showcase
              </Link>
              {/* More menu items will be dynamically generated later */}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notification bell placeholder */}
            <button 
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted"
              aria-label="Notifications"
            >
              🔔
            </button>
            
            {/* User menu */}
            <div className="relative">
              <button 
                className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                aria-label="User menu"
              >
                👤
              </button>
              
              {/* Dropdown menu would go here */}
              
              {/* Temporary logout button */}
              <button 
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="ml-2 text-sm text-foreground hover:text-primary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow bg-background">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Indonet Analytics Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
