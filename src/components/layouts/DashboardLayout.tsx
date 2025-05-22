'use client';

import { useState, useEffect } from 'react';
import { DynamicNavbar } from '@/components/ui/dynamic-navbar';
import { Footer } from '@/components/ui/footer';
import TermsAndConditionsModal from '@/components/common/TermsAndConditionsModal';
import AutoLogoutWarning from '@/components/common/AutoLogoutWarning';

// Type definitions
interface SystemConfigItem {
  key: string;
  value: string;
}

interface SystemConfigMap {
  [key: string]: string;
}

interface UserDataResponse {
  name: string;
  profile_photo_url?: string;
  unread_notifications_count?: number;
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [systemConfig, setSystemConfig] = useState({
    appName: 'Indonet Analytics Hub',
    logoUrl: '/logo.png',
  });
  const [currentUser, setCurrentUser] = useState({
    name: 'User',
    image: '',
    unreadNotifications: 0
  });
  
  // Fetch system configuration and user data
  useEffect(() => {
    const fetchSystemConfig = async () => {
      try {
        const response = await fetch('/api/system-configurations');
        if (response.ok) {
          const data = await response.json() as SystemConfigItem[];
          const configs = data.reduce<SystemConfigMap>((acc, item) => {
            acc[item.key] = item.value;
            return acc;
          }, {});
          
          setSystemConfig({
            appName: configs.app_name || 'Indonet Analytics Hub',
            logoUrl: configs.logo_url || '/logo.png',
          });
        }
      } catch (error: unknown) {
        console.error('Error fetching system configurations:', error);
      }
    };
    
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users/me');
        if (response.ok) {
          const data = await response.json() as UserDataResponse;
          setCurrentUser({
            name: data.name || 'User',
            image: data.profile_photo_url || '',
            unreadNotifications: data.unread_notifications_count || 0
          });
        }
      } catch (error: unknown) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchSystemConfig();
    fetchUserData();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Navbar */}
      <DynamicNavbar 
        title={systemConfig.appName}
        logoSrc={systemConfig.logoUrl}
        userName={currentUser.name}
        userImage={currentUser.image}
        notifications={currentUser.unreadNotifications}
      />
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Terms and Conditions Modal */}
      <TermsAndConditionsModal />
      
      {/* Auto Logout Warning */}
      <AutoLogoutWarning />
    </div>
  );
}
