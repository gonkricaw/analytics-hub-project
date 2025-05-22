import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * GET /api/terms-and-conditions
 * Get the latest published Terms and Conditions
 */
export async function GET() {
  try {
    // Get the latest published Terms and Conditions
    const termsAndConditions = await prisma.idnbi_TermsAndConditions.findFirst({
      where: {
        published_at: { not: null },
      },
      orderBy: {
        published_at: 'desc',
      },
    });
    
    if (!termsAndConditions) {
      return NextResponse.json(
        { error: 'No Terms and Conditions found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(termsAndConditions);
  } catch (error) {
    console.error('Error fetching Terms and Conditions:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
