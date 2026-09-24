import { NextResponse } from "next/server";
import { BUSINESS_PILLARS } from "@/lib/data";

/**
 * GET /api/v1/businesses
 * Returns hardcoded business pillars data with 200 OK.
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: BUSINESS_PILLARS,
    message: "Business pillars retrieved successfully (hardcoded mock)",
    meta: {
      timestamp: new Date().toISOString(),
      total: BUSINESS_PILLARS.length,
    },
  });
}
