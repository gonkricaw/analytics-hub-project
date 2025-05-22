import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md border-amber-500 border shadow-lg">
        <CardHeader className="border-b border-amber-200 bg-amber-50 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
            <FileQuestion />
            <CardTitle>Page Not Found</CardTitle>
          </div>
          <CardDescription className="text-amber-500 dark:text-amber-400">
            The page you are looking for doesn't exist or has been moved
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm">
            The page you're trying to access cannot be found. Please check the URL or navigate back to the homepage.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
          <Button 
            variant="default" 
            asChild
          >
            <Link href="/">
              Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
