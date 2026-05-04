import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export type SiteLang = 'ru' | 'kk'

const STORAGE_KEY = 'dobre-serdce-lang'

const stripLocaleSegment = (pathname: string) =>
  pathname.replace(/^\/(ru|kz)(?=\/|$)/, '') || '/'

const localeSegment = (lang: SiteLang) => (lang === 'kk' ? 'kz' : 'ru')

export function useLocale() {
  const { locale } = useI18n()

  const setLang = (value: SiteLang) => {
    locale.value = value
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value

    if (typeof window !== 'undefined') {
      const path = stripLocaleSegment(window.location.pathname)
      const newPath = `/${localeSegment(value)}${path}${window.location.search}${window.location.hash}`
      window.history.replaceState(null, '', newPath.replace(/([^:]\/)\/+/, '$1'))
    }
  }

  const isRu = computed(() => locale.value === 'ru')

  return {
    lang: locale,
    isRu,
    setLang,
  }
}
