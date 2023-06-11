import * as Localization from 'expo-localization'
import { I18n } from 'i18n-js'

import ru from './locales/ru.json'
import en from './locales/en.json'

const i18n = new I18n({
  ru,
  en,
})

i18n.enableFallback = true
i18n.defaultLocale = Localization.locale.includes('ru') ? 'ru' : 'en'
i18n.locale = i18n.defaultLocale

export default i18n
