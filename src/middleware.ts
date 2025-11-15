import { authMiddleware } from '@/middlewares/auth'
//import { i18nMiddleware } from '@/middlewares/i18nMiddleware'
import { securityMiddleware } from '@/middlewares/security'
import { NextResponse, type NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
	let response = NextResponse.next()
	response = authMiddleware(request)
	//response = i18nMiddleware(request, response)
	response = securityMiddleware(request, response)
	return response
}

export const config = {
	matcher: ['/((?!_next|api|static|favicon.ico).*)'],
}
