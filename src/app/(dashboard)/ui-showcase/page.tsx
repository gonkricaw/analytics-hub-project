'use client';

import { Globe } from "@/components/magicui/globe";

export default function UIShowcasePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">UI Component Showcase</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">MagicUI Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-medium mb-4">Globe Component</h3>
            <div className="relative aspect-square w-full max-w-[400px] mx-auto">
              <Globe />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {/* Button components will be added here */}
          <div className="p-4 border rounded">Primary Button Placeholder</div>
          <div className="p-4 border rounded">Secondary Button Placeholder</div>
          <div className="p-4 border rounded">Destructive Button Placeholder</div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Input components will be added here */}
          <div className="p-4 border rounded">Text Input Placeholder</div>
          <div className="p-4 border rounded">Password Input Placeholder</div>
          <div className="p-4 border rounded">Email Input Placeholder</div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Selection Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Selection components will be added here */}
          <div className="p-4 border rounded">Dropdown Placeholder</div>
          <div className="p-4 border rounded">Checkbox Placeholder</div>
          <div className="p-4 border rounded">Radio Button Placeholder</div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Feedback Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Feedback components will be added here */}
          <div className="p-4 border rounded">Modal Placeholder</div>
          <div className="p-4 border rounded">Toast Notification Placeholder</div>
        </div>
      </section>
      
      {/* More component sections will be added here */}
    </div>
  );
}
