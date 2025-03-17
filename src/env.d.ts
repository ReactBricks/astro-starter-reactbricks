interface ImportMetaEnv {
  readonly API_KEY: string
  readonly PUBLIC_APP_ID: string
  readonly PUBLIC_ENVIRONMENT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  interface Locals {
    isRewrite?: boolean
  }
}

interface Window {
  theme: {
    setTheme: (theme: 'auto' | 'dark' | 'light') => void
    getTheme: () => 'auto' | 'dark' | 'light'
    getSystemTheme: () => 'light' | 'dark'
    getDefaultTheme: () => 'auto' | 'dark' | 'light'
  }
}

declare module 'virtual:*' {
  const component: any
  export default component
}
