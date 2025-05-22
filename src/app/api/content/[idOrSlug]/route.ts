import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { cacheableValue } from "@/lib/cache";
import * as Sentry from "@sentry/nextjs";

export async function GET(
  request: NextRequest,
  { params }: { params: { idOrSlug: string } },
) {
  try {
    const { idOrSlug } = params;

    // Get the content with caching
    const content = await cacheableValue(
      `content:${idOrSlug}`,
      async () => {
        return prisma.idnbi_Content.findFirst({
          where: {
            OR: [
              { id: idOrSlug },
              // If you implement slug functionality later
              // { slug: idOrSlug }
            ],
          },
        });
      },
      { expireInSeconds: 3600 }, // Cache for 1 hour
    );

    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    // Check if it's an external_link_embed type that requires authentication
    if (content.type === "external_link_embed") {
      // Check authentication
      const session = await getServerSession(authOptions);

      if (!session || !session.user) {
        // If not authenticated, return a 401 with a redirect to login
        return NextResponse.json(
          {
            error: "Authentication required",
            redirectToLogin: true,
          },
          { status: 401 },
        );
      }
    }

    // Log access if applicable
    // This could be enhanced to track and analyze popular content

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.error("Error retrieving content:", error);
    Sentry.captureException(error);
    return NextResponse.json(
      { error: "Failed to retrieve content" },
      { status: 500 },
    );
  }
}
