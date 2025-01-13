import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru', 'en'],
  // Used when no locale matches
  defaultLocale: 'az',
  pathnames : {
    '/' : '/',
    "/products" : {
      az: '/məhsullar',
      ru: '/produksiya',
      en: '/products'
    },
    "/partners" : {
      az: '/tərəfdaşlarımız',
      ru: '/partneri',
      en: '/partners'
    },
    "/contacts" : {
      az: '/əlaqə',
      ru: '/kontakti',
      en: '/contacts'
    },
    "/aboutUs" : {
      az: '/haqqımızda',
      ru: '/o-nas',
      en: '/about'
    }

  }
});
 
export const config = {
  matcher: [
    '/',
    '/(az|ru|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};