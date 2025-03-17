import { defineMiddleware } from 'astro:middleware'
import { defaultLocale, locales } from '@/i18n/conf'

function getLanguageFromPath(pathname: string): string | null {
  const parts = pathname.split('/').filter(Boolean)
  return locales.includes(parts[0]) ? parts[0] : null
}

function isAdminOrPreviewPath(pathname: string): boolean {
  return (
    pathname === '/admin' ||
    pathname.startsWith('/admin/') ||
    pathname === '/preview' ||
    pathname.startsWith('/preview/')
  )
}

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url

  if (isAdminOrPreviewPath(pathname)) {
    return next()
  }

  const lang = getLanguageFromPath(pathname)

  if (!lang) {
    // Prevent infinite loop by setting a flag
    context.locals.isRewrite = true
    return context.rewrite(`/${defaultLocale}${pathname}`)
  }

  if (!context.locals.isRewrite && lang === defaultLocale) {
    return context.redirect(pathname.replace(`/${defaultLocale}`, '') || '/')
  }

  return next()
})
