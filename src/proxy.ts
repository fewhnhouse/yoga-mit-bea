import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In Next.js 16, middleware is renamed to proxy
export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const response = NextResponse.next();

  // Check if we're on localhost or Vercel preview (allows site switching)
  const isLocalhost =
    hostname.includes("localhost") || hostname.includes("127.0.0.1");
  const isVercelPreview = hostname.includes("vercel.app");

  // Check for existing cookie (set by SiteSwitcher)
  const existingCookie = request.cookies.get("site-id")?.value;

  // On localhost/preview, respect the cookie if set (allows switching)
  // On production domains, always use domain-based detection
  let siteId: string;

  if ((isLocalhost || isVercelPreview) && existingCookie) {
    // Dev/preview mode: respect the cookie set by SiteSwitcher
    siteId = existingCookie;
  } else if (
    hostname.includes("therapie") ||
    hostname.includes("therapie-mit-bea")
  ) {
    // Production: domain-based detection
    siteId = "therapie";
  } else {
    // Default to yoga
    siteId = "yoga";
  }

  // Set the site ID in a header that can be read by the app
  response.headers.set("x-site-id", siteId);

  // Set/update the cookie for client-side hydration
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

