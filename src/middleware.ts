import { authMiddleware } from '@/middlewares/auth'
import { securityMiddleware } from '@/middlewares/security'
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const authResponse = authMiddleware(request)

	if (
		authResponse &&
		authResponse instanceof NextResponse &&
		authResponse.headers.get('Location')
	) {
		return authResponse
	}

	const securityResponse = securityMiddleware(request, authResponse)

	return securityResponse
}

export const config = {
	matcher: ['/((?!_next|api|static|favicon.ico).*)'],
}
