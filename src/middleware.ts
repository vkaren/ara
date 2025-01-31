import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const isLoggedIn = true;

  if (pathname === "/") {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.redirect(new URL("/register", request.url));
  }

  // TODO: IMPROVE
  const protectedRoutes = ["/home", "/notifications", "/search", "/profile", "/post", "/settings"];
  if (protectedRoutes.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  return NextResponse.next();
};
