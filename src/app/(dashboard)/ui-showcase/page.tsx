"use client";

import { useState } from "react";
import { Globe } from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { DigitalClock } from "@/components/ui/digital-clock";
import { Marquee } from "@/components/ui/marquee";
import { Chart } from "@/components/ui/chart";
import { FileInput } from "@/components/ui/file-input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Carousel } from "@/components/ui/carousel";
import { CodeHighlighter } from "@/components/ui/code-highlighter";
import { SanitizedHTML } from "@/components/ui/sanitized-html";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function UIShowcasePage() {
  const [openDialog, setOpenDialog] = useState(false);

  // Dummy data for components
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Inactive",
    },
  ]; // Chart configuration is now directly used in the Chart component

  const carouselItems = [
    <div
      key="1"
      className="h-64 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl"
    >
      Slide 1
    </div>,
    <div
      key="2"
      className="h-64 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl"
    >
      Slide 2
    </div>,
    <div
      key="3"
      className="h-64 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl"
    >
      Slide 3
    </div>,
  ];

  // Show toast function
  const showNotification = () => {
    toast("This is a notification", {
      description: "This is a description of the notification",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">UI Component Showcase</h1>

      {/* Marquee */}
      <section className="mb-12">
        <Marquee>
          <div className="mr-8">
            Welcome to Indonet Analytics Hub UI Component Showcase
          </div>
          <div className="mr-8">Explore our beautiful UI components</div>
          <div className="mr-8">
            Built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion
          </div>
        </Marquee>
      </section>

      {/* MagicUI Components */}
      <section className="mb-12" id="magic-ui">
        <h2 className="text-2xl font-bold mb-4">MagicUI Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Globe Component</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                <Globe />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Time Components */}
      <section className="mb-12" id="time-components">
        <h2 className="text-2xl font-bold mb-4">Time Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Digital Clock</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <DigitalClock />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12" id="buttons">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow p-6">
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="sm">Small Button</Button>
            <Button>Default Button</Button>
            <Button size="lg">Large Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 20V10" />
                <path d="M18 14l-6-6-6 6" />
              </svg>
            </Button>
          </div>
        </Card>
      </section>

      {/* Inputs */}
      <section className="mb-12" id="inputs">
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Card className="shadow-lg hover:shadow-xl transition-shadow p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Text Inputs</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="text-input">Text Input</Label>
                  <Input
                    id="text-input"
                    placeholder="Enter text..."
                    className="shadow hover:shadow-md transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password-input">Password Input</Label>
                  <Input
                    id="password-input"
                    type="password"
                    placeholder="Enter password..."
                    className="shadow hover:shadow-md transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="textarea">Textarea</Label>
                  <Textarea
                    id="textarea"
                    placeholder="Enter longer text..."
                    className="shadow hover:shadow-md transition-shadow"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="shadow-lg hover:shadow-xl transition-shadow p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Special Inputs</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="space-y-2">
                  <Label>File Input</Label>
                  <FileInput className="shadow hover:shadow-md transition-shadow" />
                </div>

                <div className="space-y-2">
                  <Label>Select</Label>
                  <Select>
                    <SelectTrigger className="shadow hover:shadow-md transition-shadow">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selection Components */}
      <section className="mb-12" id="selection">
        <h2 className="text-2xl font-bold mb-4">Selection Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="default">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Display */}
      <section className="mb-12" id="data-display">
        <h2 className="text-2xl font-bold mb-4">Data Display Components</h2>
        <div className="space-y-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>
                This is a description for the card component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This is the card content area where you can place any content.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Table Component</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Avatar Component</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <Avatar className="shadow hover:shadow-md transition-shadow">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="shadow hover:shadow-md transition-shadow">
                <AvatarImage src="https://github.com/github.png" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <Avatar className="shadow hover:shadow-md transition-shadow">
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feedback Components */}
      <section className="mb-12" id="feedback">
        <h2 className="text-2xl font-bold mb-4">Feedback Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Dialog/Modal</CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="shadow-lg">
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      This is a description of the dialog content.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p>This is the main content of the dialog.</p>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setOpenDialog(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setOpenDialog(false)}>
                      Confirm
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Toast Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={showNotification}>Show Notification</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loading States */}
      <section className="mb-12" id="loading">
        <h2 className="text-2xl font-bold mb-4">Loading States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Spinner</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Spinner size="lg" />
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex space-x-4 pt-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="mb-12" id="navigation">
        <h2 className="text-2xl font-bold mb-4">Navigation Components</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Navigation Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Indonet Analytics
                            </div>
                            <p className="text-sm leading-tight text-slate-400">
                              Powerful analytics platform for your business.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink>Documentation</NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink>Resources</NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-blue-400"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Button
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Button component for user interactions.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-blue-400"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">
                              Card
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-slate-400">
                              Card component for content organization.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </section>

      {/* Rich Text Editor */}
      <section className="mb-12" id="rich-text">
        <h2 className="text-2xl font-bold mb-4">Rich Text Editor</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>TipTap Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <RichTextEditor />
          </CardContent>
        </Card>
      </section>

      {/* Chart */}
      <section className="mb-12" id="charts">
        <h2 className="text-2xl font-bold mb-4">Charts</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>ApexCharts</CardTitle>
          </CardHeader>{" "}
          <CardContent>
            <Chart
              type="area"
              series={[
                {
                  name: "Sales",
                  data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
                },
                {
                  name: "Revenue",
                  data: [20, 35, 40, 60, 58, 52, 65, 80, 95],
                },
              ]}
              options={{
                chart: {
                  height: 350,
                  toolbar: { show: false },
                  background: "transparent",
                },
                colors: ["#60a5fa", "#f87171"],
                theme: { mode: "dark" as const },
                xaxis: {
                  categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                  ],
                },
              }}
              height={350}
              className="shadow-lg hover:shadow-xl transition-shadow"
            />
          </CardContent>
        </Card>
      </section>

      {/* Carousel */}
      <section className="mb-12" id="carousel">
        <h2 className="text-2xl font-bold mb-4">Carousel</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Swiper Carousel</CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-hidden">
            <Carousel items={carouselItems} />
          </CardContent>
        </Card>
      </section>

      {/* Code Highlighter */}
      <section className="mb-12" id="code-highlighter">
        <h2 className="text-2xl font-bold mb-4">Code Highlighter (PrismJS)</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Syntax Highlighting with PrismJS</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeHighlighter
              code={`// A simple JavaScript function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Using the function
console.log(greet('Indonet'));`}
              language="javascript"
            />

            <div className="mt-6">
              <CodeHighlighter
                code={`import React from 'react';
import { Button } from './ui/button';

export function ActionButton() {
  return (
    <Button 
      onClick={() => console.log('Button clicked!')}
      variant="primary"
      size="lg"
    >
      Click Me
    </Button>
  );
}`}
                language="tsx"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sanitized HTML */}
      <section className="mb-12" id="sanitized-html">
        <h2 className="text-2xl font-bold mb-4">Sanitized HTML (DOMPurify)</h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>DOMPurify HTML Sanitization</CardTitle>
            <CardDescription>
              Shows how user-generated HTML content is safely sanitized
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SanitizedHTML
              html={`<div>
  <h3>User Generated Content</h3>
  <p>This content is <strong>sanitized</strong> for safety with <em>DOMPurify</em>.</p>
  <ul>
    <li>Safe links: <a href="https://example.com">Example Link</a></li>
    <li>Safe formatting: <span style="color: blue;">Colored text</span></li>
  </ul>
  <!-- Script tags are removed by default -->
  <script>alert('This script will be removed')</script>
</div>`}
              className="bg-slate-800 p-4 rounded-lg border border-slate-700"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
