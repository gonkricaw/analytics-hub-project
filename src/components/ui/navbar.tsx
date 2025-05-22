"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bell, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

interface NavbarProps {
  title?: string;
  logoSrc?: string;
  menuItems?: {
    title: string;
    href?: string;
    children?: { title: string; href: string; description?: string }[];
  }[];
  userImage?: string;
  userName?: string;
  notifications?: number;
}

export const Navbar = ({
  title = "Indonet Analytics Hub",
  logoSrc = "/logo.png",
  menuItems = [],
  userImage,
  userName = "User",
  notifications = 0,
}: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                  <Image
                    src={logoSrc}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  IA
                </div>
              )}
            </Link>
          </motion.div>
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-blue-400 transition duration-200"
          >
            {title}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) =>
                item.children ? (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="text-white hover:text-blue-400 transition duration-200">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-blue-400"
                              >
                                <div className="text-sm font-medium text-white">
                                  {child.title}
                                </div>
                                {child.description && (
                                  <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                                    {child.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink className="text-white hover:text-blue-400 transition duration-200">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* User Area and Notifications */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer"
          >
            <Bell className="h-6 w-6 text-slate-300 hover:text-blue-400 transition duration-200" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications > 9 ? "9+" : notifications}
              </span>
            )}
          </motion.div>

          {/* User Avatar */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Avatar className="border-2 border-blue-500">
              <AvatarImage src={userImage} alt={userName} />
              <AvatarFallback className="bg-slate-700 text-white">
                {userName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-3 space-y-1 bg-slate-900 border-t border-slate-800">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.children ? (
                  <div>
                    <div className="text-white font-medium py-2">
                      {item.title}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block text-slate-300 hover:text-blue-400 py-2 transition duration-200"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block text-white hover:text-blue-400 py-2 transition duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
