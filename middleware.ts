import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET = "my-secret-key";

export function middleware(req: any) {
  const { pathname } = req.nextUrl;
  
  // Allow public routes
  if (pathname === "/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  try {
    jwt.verify(token, SECRET);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

