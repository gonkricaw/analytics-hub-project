import { Metadata } from "next";
import ContentViewer from "@/components/content/ContentViewer";

interface ContentPageProps {
  params: { idOrSlug: string };
}

export const metadata: Metadata = {
  title: "Content",
  description: "View content from Indonet Analytics Hub",
};

export default function ContentPage({ params }: ContentPageProps) {
  return (
    <div className="container mx-auto py-8">
      <ContentViewer id={params.idOrSlug} />
    </div>
  );
}
