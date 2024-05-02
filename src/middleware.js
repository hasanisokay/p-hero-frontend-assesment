import { NextResponse } from "next/server";
import { COOKIE_NAME } from "./constants/constants";

export default async function middleware(request) {
  const { pathname } = request.nextUrl;
  let token = request.cookies.get(COOKIE_NAME)?.value.split("Bearer")[1];
  if ((pathname === "/login" || pathname === "/profile" || pathname === "/identity"  || pathname === "/signup") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
