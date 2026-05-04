import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import kk from './locales/kk'

const STORAGE_KEY = 'dobre-serdce-lang'

const getLocaleFromPath = (pathname: string) => {
  if (typeof window === 'undefined') return null
  const match = pathname.match(/^\/(ru|kz)(?=\/|$)/)
  if (!match) return null
  return match[1] === 'kz' ? 'kk' : 'ru'
}

const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
const initialLocale = getLocaleFromPath(typeof window !== 'undefined' ? window.location.pathname : '/') || (stored === 'kk' ? 'kk' : 'ru')

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLocale
}

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'ru',
  messages: { ru, kk },
})
