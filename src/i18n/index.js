import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locale/en'
import es from './locale/es'

const resources = {
  en,
  es
}

const getLocale = () => {
  for (const locale of navigator.languages) {
    const lang = locale.split('-')[0]
    if (Object.keys(resources).includes(lang)) {
      return lang
    }
  }

  // No translations were found, so just show the site in English
  return 'en'
}

i18n
  .use(initReactI18next)
  .init({
    lng: getLocale(),
    defaultNS: 'copy',
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    },
    resources
  })

export default i18n
