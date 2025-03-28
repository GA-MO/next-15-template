import createMiddleware from 'next-intl/middleware'
import { routing } from './plugins/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(en|th)/:path*`, '/((?!api|_next|_vercel|.*\\..*).*)']
}
