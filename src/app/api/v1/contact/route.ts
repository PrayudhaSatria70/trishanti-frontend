import { NextResponse, type NextRequest } from "next/server";

/**
 * GET /api/v1/contact
 * Returns hardcoded contact information.
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API active (hardcoded mock)",
    data: {
      email: "corporate@trishanti.id",
      phone: "+62 (21) 5088-2900",
      headquarters: "SCBD Jakarta Selatan 12190, Indonesia",
    },
  });
}

/**
 * POST /api/v1/contact
 * Accepts inquiries and returns simulated success without external dependencies.
 */
export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  return NextResponse.json({
    success: true,
    message: "Inquiry received successfully (hardcoded mock)",
    data: {
      receivedAt: new Date().toISOString(),
      ...body,
    },
  });
}
