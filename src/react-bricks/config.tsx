import { defaultLocale } from '@/i18n/conf'
import { parseSlug } from '@/i18n/util'
import { reactBricksAstroStore, types } from 'react-bricks/astro'
import bricks from './bricks'
import pageTypes from './pageTypes'

const navigate = (path: string) => {
  if (typeof window !== 'undefined' && window.location) {
    window.location.href = path
  }
}

const renderLocalLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  tabIndex,
  children,
}) => {
  let anchorClassName = className || ''

  let pathname = reactBricksAstroStore.getPathname()
  const { lang, cleanSlug } = parseSlug(pathname)

  if (lang === defaultLocale) {
    pathname = cleanSlug
  }

  if (activeClassName && pathname && pathname === href) {
    anchorClassName = `${className} ${activeClassName}`
  }

  return (
    <a href={href} className={anchorClassName} tabIndex={tabIndex}>
      {children}
    </a>
  )
}

const config: types.ReactBricksConfig = {
  appId: import.meta.env.PUBLIC_APP_ID || '',
  apiKey: import.meta.env.API_KEY || '',
  environment: import.meta.env.PUBLIC_ENVIRONMENT,
  bricks,
  pageTypes,
  customFields: [],
  logo: '/logo.svg',
  loginUI: {},
  contentClassName: '',
  renderLocalLink,
  navigate,
  loginPath: '/admin',
  editorPath: '/admin/editor',
  mediaLibraryPath: '/admin/media',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  previewPath: '/preview',
  // getAdminMenu: () => [],
  isDarkColorMode: false,
  toggleColorMode: () => {},
  useCssInJs: false,
  appRootElement: '#__react-bricks',
  clickToEditSide: types.ClickToEditSide.BottomRight,
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: "Smartphone" },],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
  blockIconsPosition: types.BlockIconsPosition.OutsideBlock,
  enableUnsplash: true,
  unsplashApiKey: '',
  enablePreviewImage: true,
  enableDefaultEmbedBrick: true,
  //permissions,  Fine-grained permissions for enterprise plans
  allowAccentsInSlugs: true,
}

export default config
