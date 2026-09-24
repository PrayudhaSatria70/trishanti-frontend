import { NextResponse, type NextRequest } from "next/server";

interface RouteProps {
  params: Promise<{ slug: string[] }>;
}

/**
 * Fallback Catchall Mock API Route Handler
 * Ensures no GET/POST/OPTIONS request to /api/* ever returns 404.
 * Returns 200 OK with structured mock data.
 */
export async function GET(
  _request: NextRequest,
  { params }: RouteProps,
) {
  const { slug } = await params;
  const path = slug ? slug.join("/") : "";

  return NextResponse.json({
    success: true,
    message: `Mock API response for path: /api/${path} (hardcoded fallback)`,
    data: [],
    meta: {
      timestamp: new Date().toISOString(),
      path,
      mock: true,
    },
  });
}

export async function POST(
  request: NextRequest,
  { params }: RouteProps,
) {
  const { slug } = await params;
  const path = slug ? slug.join("/") : "";
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  return NextResponse.json({
    success: true,
    message: `Mock API submission accepted for /api/${path} (hardcoded fallback)`,
    data: body,
    meta: {
      timestamp: new Date().toISOString(),
      path,
      mock: true,
    },
  });
}
