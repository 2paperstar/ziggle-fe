import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

const fallbackLng = 'en';
export const languages = [fallbackLng, 'ko'] as const;
export type Locales = (typeof languages)[number];

const cookieName = 'next-locale';

const getLang = (req: NextRequest) => {
  if (req.cookies.has(cookieName)) {
    const lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
    if (lng) return lng;
  }
  const lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (lng) return lng;
  return fallbackLng;
};

export function middleware(req: NextRequest) {
  const lng = getLang(req);
  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  const referer = req.headers.get('referer');
  if (referer) {
    const refererUrl = new URL(referer);
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
