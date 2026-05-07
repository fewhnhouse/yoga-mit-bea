import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSiteIdFromHostname } from "@/lib/siteFromHost";

// In Next.js 16, middleware is renamed to proxy
export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const requestHeaders = new Headers(request.headers);

  // Check if we're on localhost or Vercel preview (allows site switching)
  const isLocalhost =
    hostname.includes("localhost") || hostname.includes("127.0.0.1");
  const isVercelPreview = hostname.includes("vercel.app");

  // Check for existing cookie (set by SiteSwitcher)
  const existingCookie = request.cookies.get("site-id")?.value;

  // On localhost/preview, respect the cookie if set (allows switching)
  // On production domains, always use domain-based detection
  let siteId: string;

  const validCookie =
    existingCookie === "yoga" || existingCookie === "therapie";

  if ((isLocalhost || isVercelPreview) && validCookie) {
    siteId = existingCookie;
  } else {
    siteId = getSiteIdFromHostname(hostname);
  }

  // Forward site ID as request header for server components/layouts.
  requestHeaders.set("x-site-id", siteId);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set/update cookie only when it changed.
  if (existingCookie !== siteId) {
    response.cookies.set("site-id", siteId, {
      path: "/",
      sameSite: "lax",
    });
  }

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
     * - public files (paths containing a dot)
     * - studio (Sanity)
     * Plus explicit SEO routes that contain a dot in the filename:
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|studio).*)",
    "/sitemap.xml",
    "/robots.txt",
  ],
};

