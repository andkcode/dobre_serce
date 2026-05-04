import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export const useSeo = (options?: {
  title?: string
  description?: string
  image?: string
  path?: string
  keywords?: string
}) => {
  const { t, locale } = useI18n()
  const baseUrl = 'https://dobroe-serdce.kz'

  const currentPath = options?.path
    ? `/${options.path.replace(/^\/+/, '')}`
    : '/'

  const localeSegment = locale.value === 'kk' ? 'kz' : 'ru'
  const currentUrl = computed(() => {
    const rawUrl = `${baseUrl}/${localeSegment}${currentPath}`
    return rawUrl.replace(/([^:]\/)\/+/, '$1')
  })

  const title = options?.title || t('seo.default.title')
  const description = options?.description || t('seo.default.description')
  const keywords = options?.keywords || t('seo.default.keywords')
  const image = options?.image || `${baseUrl}/logo.png`

  const ensureMeta = (
    key: string,
    value: string,
    isProperty = false,
  ) => {
    if (!value) return
    const attribute = isProperty ? 'property' : 'name'
    const selector = `meta[${attribute}="${key}"]`
    let element = document.head.querySelector<HTMLMetaElement>(selector)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, key)
      document.head.appendChild(element)
    }
    element.setAttribute('content', value)
  }

  const ensureLink = (rel: string, href: string, hreflang?: string) => {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]`
    let element = document.head.querySelector<HTMLLinkElement>(selector)
    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', rel)
      if (hreflang) element.setAttribute('hreflang', hreflang)
      document.head.appendChild(element)
    }
    element.setAttribute('href', href)
  }

  if (typeof document !== 'undefined') {
    document.title = title
    document.documentElement.lang = locale.value

    ensureMeta('description', description)
    ensureMeta('keywords', keywords)
    ensureMeta('robots', 'index,follow')
    ensureMeta('og:type', 'website', true)
    ensureMeta('og:title', title, true)
    ensureMeta('og:description', description, true)
    ensureMeta('og:url', currentUrl.value, true)
    ensureMeta('og:image', image, true)
    ensureMeta('twitter:card', 'summary_large_image')
    ensureMeta('twitter:title', title)
    ensureMeta('twitter:description', description)
    ensureMeta('twitter:image', image)

    ensureLink('canonical', currentUrl.value)
    ensureLink('alternate', `${baseUrl}/ru${currentPath}`, 'ru')
    ensureLink('alternate', `${baseUrl}/kz${currentPath}`, 'kk')
    ensureLink('alternate', `${baseUrl}/`, 'x-default')
  }
}
