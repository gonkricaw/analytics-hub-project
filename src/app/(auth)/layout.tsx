import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indonet Analytics Hub - Authentication',
  description: 'Authentication for Indonet Analytics Hub',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      {children}
    </div>
  );
}
