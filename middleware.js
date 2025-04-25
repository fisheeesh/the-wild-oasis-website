import { auth } from "./app/_lib/auth";
import { NextResponse } from "next/server";

//? By default, middleware runs for all routes
export async function middleware(request) {
    const session = await auth();
    const { pathname } = request.nextUrl;

    // ? Protect /account/* → if NOT logged in, redirect to /login
    if (pathname.startsWith("/account")) {
        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // ? Prevent logged-in users from accessing /login
    if (pathname === "/login" && session) {
        return NextResponse.redirect(new URL("/account", request.url));
    }

    return NextResponse.next();
}

export const config = {
    //?Apply middleware to both /account/** and /login
    matcher: ["/account/:path*", "/login"],
};