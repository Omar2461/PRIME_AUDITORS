import type { I18nConfig } from 'next-i18next/proxy'

const i18nConfig: I18nConfig = {
  supportedLngs: ['en', 'ar'],
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common', 'home', 'aboutUs', 'services', 'blog',"links","client"],

  //  reloadOnPrerender: process.env.NODE_ENV === 'development',

  // Recommended: works on all platforms including Vercel/serverless
  resourceLoader: (language, namespace) =>
    import(`./app/i18n/locales/${language}/${namespace}.json`),
}

export default i18nConfig