import { NextResponse } from "next/server";
import { INSIGHT_ARTICLES } from "@/lib/data";

/**
 * GET /api/v1/news
 * Returns hardcoded news and insights articles with 200 OK.
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: INSIGHT_ARTICLES,
    message: "News & Insights articles retrieved successfully (hardcoded mock)",
    meta: {
      timestamp: new Date().toISOString(),
      total: INSIGHT_ARTICLES.length,
    },
  });
}
