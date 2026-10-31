import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. Fetch current session from Better Auth via internal API
  const sessionRes = await fetch(
    `${request.nextUrl.origin}/api/auth/get-session`,
    {
      headers: {
        // Forward browser cookies so Better Auth can read the session token
        cookie: request.headers.get("cookie") || "",
      },
    },
  );

  const session = await sessionRes.json();

  // 2. Define protected route prefixes
  const protectedRoutes = ["/dashboard"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // 3. If accessing a protected route without a valid session, redirect to login
  if (isProtected && !session?.user) {
    const loginUrl = new URL("/login", request.url);
    // Retain the intended path to redirect back after login
    loginUrl.searchParams.set("callbackURL", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 4. (Optional) Prevent logged-in users from visiting auth pages (/login, /register)
  const authRoutes = ["/lInE/login", "/lInE/register"];
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute && session?.user) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// 5. Run middleware only on matching application paths
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, assets, data/students.json)
     * - api/auth routes
     */
    "/((?!_next/static|_next/image|favicon.ico|api/auth|data|.*\\..*).*)",
  ],
};
