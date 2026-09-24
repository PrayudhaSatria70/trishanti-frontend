import { NextResponse } from "next/server";
import { LEADERSHIP_TEAM } from "@/lib/data";

/**
 * GET /api/v1/leadership
 * Returns hardcoded leadership team profiles with 200 OK.
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: LEADERSHIP_TEAM,
    message: "Leadership team retrieved successfully (hardcoded mock)",
    meta: {
      timestamp: new Date().toISOString(),
      total: LEADERSHIP_TEAM.length,
    },
  });
}
