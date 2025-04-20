import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

//? By default, middleware runs for all routes
// export const middleware = (request) => {
//     console.log(request)

//     //? This will be create an infite redirected loop.
//     return NextResponse.redirect(new URL('/about', request.url))
// }

export const middleware = auth

//? To prevent this, we will only run middleware for specific routes.
export const config = {
    matcher: ['/account']
}