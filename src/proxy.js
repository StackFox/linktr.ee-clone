import { NextResponse } from 'next/server'

export function proxy(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/signup' || path === '/'
    const token = request.cookies.get('token')?.value || ''

    // If user is logged in and trying to access public pages, redirect to dashboard
    if (isPublicPath && token) {

        return NextResponse.redirect(new URL("/admin", request.nextUrl))
    }

    // If user is not logged in and trying to access protected pages, redirect to login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/admin'
    ]
}