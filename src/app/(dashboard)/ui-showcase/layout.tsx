"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function UIShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sample menu items for the navbar
  const menuItems = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "UI Showcase",
      href: "/ui-showcase",
    },
    {
      title: "Components",
      children: [
        {
          title: "Buttons",
          href: "#buttons",
          description: "Interactive button components",
        },
        {
          title: "Inputs",
          href: "#inputs",
          description: "Form input components",
        },
        {
          title: "Cards",
          href: "#cards",
          description: "Content display cards",
        },
      ],
    },
    {
      title: "Documentation",
      href: "#documentation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar menuItems={menuItems} notifications={3} userName="Demo User" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
