import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru', 'en'],
  // Used when no locale matches
  defaultLocale: 'az',
  pathnames : {
    '/' : '/',
    "/products" : {
      az: '/mehsullar',
      ru: '/produksiya',
      en: '/products'
    }
   
    // "/cartPage" : {
    //   az: '/sebet',
    //   ru: '/korzina'
    // }

  }
});
 
export const config = {
  matcher: [
    '/',
    '/(az|ru|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};