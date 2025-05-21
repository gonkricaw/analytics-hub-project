'use client';

import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Indonet Analytics Hub</h1>
      
      {session?.user ? (
        <section className="mb-8">
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              Hello, {session.user.name || 'User'}
            </h2>
            <p className="text-muted-foreground">
              You are logged in as: {session.user.email}
            </p>
            {session.user.role && (
              <p className="text-sm text-muted-foreground mt-1">
                Role: {session.user.role}
              </p>
            )}
          </div>
        </section>
      ) : (
        <p>Loading session information...</p>
      )}
      
      {/* This will be replaced with the actual home page layout as per requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Placeholder for Marquee</h3>
          <p className="text-sm text-muted-foreground">
            This will be replaced with the Marquee component.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Placeholder for Jumbotron</h3>
          <p className="text-sm text-muted-foreground">
            This will be replaced with the Jumbotron component.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Placeholder for Digital Clock</h3>
          <p className="text-sm text-muted-foreground">
            This will be replaced with the Digital Clock component.
          </p>
        </div>
        
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h3 className="font-medium mb-2">Placeholder for Analytics Widget</h3>
          <p className="text-sm text-muted-foreground">
            This will be replaced with analytics widgets.
          </p>
        </div>
      </div>
    </div>
  );
}
