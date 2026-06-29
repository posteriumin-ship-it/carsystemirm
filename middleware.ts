import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AUTH_HEADER = 'Basic realm="Carsystem RM Preview"';

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": AUTH_HEADER,
      "Cache-Control": "no-store",
    },
  });
}

function parseBasicAuth(header: string | null) {
  if (!header?.startsWith("Basic ")) {
    return null;
  }

  try {
    const decoded = atob(header.slice("Basic ".length).trim());
    const separatorIndex = decoded.indexOf(":");

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const expectedUsername = process.env.PREVIEW_USERNAME;
  const expectedPassword = process.env.PREVIEW_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return unauthorized();
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"));

  if (
    credentials?.username === expectedUsername &&
    credentials.password === expectedPassword
  ) {
    return NextResponse.next();
  }

  return unauthorized();
}

export const config = {
  matcher: ["/preview", "/preview/:path*"],
};
