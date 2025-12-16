import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In Next.js 16, middleware is renamed to proxy
export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const response = NextResponse.next();

  // Determine site based on domain
  let siteId = "yoga"; // default

  if (
    hostname.includes("therapie") ||
    hostname.includes("therapie-mit-bea")
  ) {
    siteId = "therapie";
  }

  // Set the site ID in a header that can be read by the app
  response.headers.set("x-site-id", siteId);

  // Also set a cookie for client-side hydration
  response.cookies.set("site-id", siteId, {
    path: "/",
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - public files
     * - studio (Sanity)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|studio).*)",
  ],
};

