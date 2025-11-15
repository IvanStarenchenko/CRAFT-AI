import { NextRequest, NextResponse } from 'next/server'

export function authMiddleware(req: NextRequest) {
	const token = req.cookies.get('token')?.value
	const url = req.nextUrl.clone()
	if (!token && url.pathname.startsWith('/profile')) {
		url.pathname = '/login'
		return NextResponse.redirect(url)
	}

	// если токен есть и пользователь пытается попасть на /login — редирект на профиль
	if (token && url.pathname.startsWith('/login')) {
		url.pathname = '/profile'
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}
