"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);

    // Also log to console in development
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md border-red-500 border shadow-lg">
        <CardHeader className="border-b border-red-200 bg-red-50 dark:bg-red-900/20">
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertTriangle />
            <CardTitle>Something went wrong!</CardTitle>
          </div>
          <CardDescription className="text-red-500 dark:text-red-400">
            An unexpected error has occurred
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm mb-4">
            We apologize for the inconvenience. Our team has been notified of
            this issue.
          </p>

          {error.digest && (
            <div className="bg-muted p-2 rounded-md mt-4">
              <p className="text-xs font-mono">Error ID: {error.digest}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
          <Button onClick={() => reset()}>Try Again</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
