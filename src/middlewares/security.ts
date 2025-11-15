import { NextRequest, NextResponse } from 'next/server'

export function securityMiddleware(
	request: NextRequest,
	response: NextResponse
) {
	response.headers.set('X-Content-Type-Options', 'nosniff')
	response.headers.set('X-Frame-Options', 'SAMEORIGIN')
	response.headers.set('X-XSS-Protection', '1; mode=block')
	response.headers.set('Referrer-Policy', 'no-referrer')
	response.headers.set('Permissions-Policy', 'geolocation=(), microphone=()')
	return response
}
