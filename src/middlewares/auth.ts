import { NextRequest, NextResponse } from 'next/server'

export function authMiddleware(req: NextRequest) {
	const accessToken = req.cookies.get('access_token')?.value
	const url = req.nextUrl.clone()

	if (!accessToken && url.pathname.startsWith('/profile')) {
		url.pathname = '/login'
		return NextResponse.redirect(url)
	}

	if (accessToken && url.pathname.startsWith('/login')) {
		url.pathname = '/profile'
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}
