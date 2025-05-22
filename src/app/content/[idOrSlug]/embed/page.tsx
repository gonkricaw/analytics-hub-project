"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ContentViewer from "@/components/content/ContentViewer";
import { Spinner } from "@/components/ui/spinner";

export default function EmbeddedContentPage({
  params,
}: {
  params: { idOrSlug: string };
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Try to fetch the content to check authentication
        const response = await fetch(`/api/content/${params.idOrSlug}`);

        if (response.status === 401) {
          // User needs to be authenticated
          router.push(`/login?redirectTo=/content/${params.idOrSlug}/embed`);
          return;
        }

        if (!response.ok) {
          throw new Error("Content not found or unavailable");
        }

        // User is authenticated and content is available
        setIsAuthenticated(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [params.idOrSlug, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="p-4 bg-destructive/20 rounded-md">
          <p className="text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen bg-slate-950">
      {isAuthenticated && <ContentViewer id={params.idOrSlug} />}
    </div>
  );
}
