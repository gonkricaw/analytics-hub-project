'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Button } from './button';

// Types for menu items from API
interface MenuItemModel {
  id: string;
  title: string;
  parent_id: string | null;
  order: number;
  icon_class: string | null;
  type: 'link_internal' | 'link_external' | 'dropdown';
  target_url: string | null;
  content_id: string | null;
  children?: MenuItemModel[];
}

export function DynamicNavbar({
  title = 'Indonet Analytics Hub',
  logoSrc = '/logo.png',
  userImage,
  userName = 'User',
  notifications = 0,
}) {
  const [menuItems, setMenuItems] = useState<MenuItemModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fetch menu items when component mounts
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/menus');
        
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        
        const data = await response.json();
        setMenuItems(data);
      } catch (err) {
        console.error('Error fetching menu items:', err);
        setError('Failed to load navigation menu');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMenuItems();
  }, []);

  // Function to log menu access for analytics
  const logMenuAccess = async (menuItemId: string) => {
    try {
      await fetch('/api/menu-access-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ menuItemId }),
      });
    } catch (error) {
      // Silent fail, don't block navigation
      console.error('Failed to log menu access:', error);
    }
  };

  // Render menu item based on its type
  const renderMenuItem = (item: MenuItemModel) => {
    if (item.type === 'dropdown' && item.children && item.children.length > 0) {
      return (
        <NavigationMenuItem key={item.id}>
          <NavigationMenuTrigger className="bg-transparent hover:bg-slate-800">
            {item.title}
            <ChevronDown className="h-4 w-4 ml-1" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-900 border border-slate-800">
            <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px]">
              {item.children.map((child) => (
                <li key={child.id}>
                  {renderSubMenuItem(child)}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      );
    } else if (item.type === 'link_internal' || item.type === 'link_external') {
      return renderLinkMenuItem(item);
    }
    return null;
  };

  // Render a link menu item (internal or external)
  const renderLinkMenuItem = (item: MenuItemModel) => {
    const isInternal = item.type === 'link_internal';
    const url = isInternal 
      ? (item.content_id ? `/content/${item.content_id}` : '#')
      : (item.target_url || '#');
    
    return (
      <NavigationMenuItem key={item.id}>
        {isInternal ? (
          <Link 
            href={url}
            onClick={() => logMenuAccess(item.id)}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink 
              className={`block select-none space-y-1 rounded-md p-3 hover:bg-slate-800 ${
                pathname === url ? 'bg-slate-800' : ''
              }`}
            >
              {item.title}
            </NavigationMenuLink>
          </Link>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logMenuAccess(item.id)}
            className="block select-none space-y-1 rounded-md p-3 hover:bg-slate-800"
          >
            {item.title}
          </a>
        )}
      </NavigationMenuItem>
    );
  };

  // Render a submenu item as a simple link
  const renderSubMenuItem = (item: MenuItemModel) => {
    const isInternal = item.type === 'link_internal';
    const url = isInternal 
      ? (item.content_id ? `/content/${item.content_id}` : '#')
      : (item.target_url || '#');
    
    return isInternal ? (
      <Link 
        href={url}
        onClick={() => logMenuAccess(item.id)}
        className="block select-none space-y-1 rounded-md p-3 hover:bg-slate-800"
      >
        {item.title}
      </Link>
    ) : (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => logMenuAccess(item.id)}
        className="block select-none space-y-1 rounded-md p-3 hover:bg-slate-800"
      >
        {item.title}
      </a>
    );
  };

  return (
    <motion.header
      className="bg-slate-900 border-b border-slate-800 shadow-lg sticky top-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              {logoSrc ? (
                <div className="relative h-10 w-10">
                  <img src={logoSrc} alt="Logo" className="object-contain" />
                </div>
              ) : (
                <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  I
                </div>
              )}
            </Link>
          </motion.div>
          <h1 className="text-white font-bold text-xl hidden sm:block">{title}</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          {loading ? (
            <div className="h-10 flex items-center text-gray-400">Loading menu...</div>
          ) : error ? (
            <div className="h-10 flex items-center text-red-400">{error}</div>
          ) : (
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map(renderMenuItem)}
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button variant="ghost" size="icon" className="text-white">
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                  {notifications > 9 ? '9+' : notifications}
                </span>
              )}
            </Button>
          </motion.div>

          {/* User Avatar */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Avatar>
              <AvatarImage src={userImage} alt={userName} />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {loading ? (
                <div className="text-gray-400">Loading menu...</div>
              ) : error ? (
                <div className="text-red-400">{error}</div>
              ) : (
                <nav className="space-y-3">
                  {menuItems.map((item) => {
                    if (item.type === 'dropdown' && item.children && item.children.length > 0) {
                      return (
                        <div key={item.id} className="space-y-2">
                          <div className="font-medium text-white">{item.title}</div>
                          <div className="pl-4 space-y-2 border-l-2 border-slate-700">
                            {item.children.map((child) => {
                              const url = child.type === 'link_internal' 
                                ? (child.content_id ? `/content/${child.content_id}` : '#')
                                : (child.target_url || '#');
                              
                              return child.type === 'link_internal' ? (
                                <Link 
                                  href={url}
                                  key={child.id}
                                  onClick={() => {
                                    logMenuAccess(child.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block text-gray-300 hover:text-white py-1"
                                >
                                  {child.title}
                                </Link>
                              ) : (
                                <a
                                  href={url}
                                  key={child.id}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    logMenuAccess(child.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block text-gray-300 hover:text-white py-1"
                                >
                                  {child.title}
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      );
                    } else if (item.type === 'link_internal' || item.type === 'link_external') {
                      const url = item.type === 'link_internal' 
                        ? (item.content_id ? `/content/${item.content_id}` : '#')
                        : (item.target_url || '#');
                      
                      return item.type === 'link_internal' ? (
                        <Link 
                          href={url}
                          key={item.id}
                          onClick={() => {
                            logMenuAccess(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className="block font-medium text-white py-1"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <a
                          href={url}
                          key={item.id}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            logMenuAccess(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className="block font-medium text-white py-1"
                        >
                          {item.title}
                        </a>
                      );
                    }
                    return null;
                  })}
                </nav>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
