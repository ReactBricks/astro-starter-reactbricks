import { getRelativeLocaleUrl } from 'astro:i18n'
import { defaultLocale, locales } from './conf'

type SlugPath = { params: { lang: string; slug: string } }
type TagPath = { params: { lang: string; tag: string } }

const parseSlug = (slug: string = '/'): { lang: string; cleanSlug: string } => {
  const parts = slug.split('/').filter((p) => !!p)
  const lang = locales.includes(parts[0]) ? parts.shift()! : defaultLocale
  const cleanSlug = parts.length ? `/${parts.join('/')}` : '/'

  return { lang, cleanSlug }
}

const getLocaleUrl = (lang: string | undefined, path: string): string => {
  if (!lang || lang === defaultLocale) {
    return path
  }

  return getRelativeLocaleUrl(lang, path)
}

const filterAndMapPaths = <T extends Array<SlugPath | TagPath>>(
  paths: T,
  pathPrefix = ''
) => {
  return paths
    .filter(({ params: { lang } }) => lang === defaultLocale)
    .map(({ params }) => ({
      params: {
        slug: `${pathPrefix}${'slug' in params ? params.slug : params.tag}`,
      },
    }))
}

export { filterAndMapPaths, getLocaleUrl, parseSlug }
