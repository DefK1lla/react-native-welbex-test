import 'intl-pluralrules'

import * as Localization from 'expo-localization'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru.json'
import en from './locales/en.json'

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: Localization.locale.includes('ru') ? 'ru' : 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    useSuspense: false, //in case you have any suspense related errors
  },
})

export default i18next
