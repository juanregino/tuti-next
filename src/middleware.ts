import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
  const token = request.cookies.get("token")?.value;

  if (request.nextUrl.pathname.includes("/dashboard")) {
    if (token === undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: "/:path*",
}