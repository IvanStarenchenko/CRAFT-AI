import { NextRequest, NextResponse } from 'next/server'

export function i18nMiddleware(request: NextRequest, response: NextResponse) {
	// const { pathname } = request.nextUrl
	// if (
	// 	SUPPORTED_LOCALES.some(
	// 		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	// 	)
	// ) {
	// 	return response
	// }
	// const acceptLang =
	// 	request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en'
	// const locale = SUPPORTED_LOCALES.includes(acceptLang) ? acceptLang : 'en'
	// return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}
