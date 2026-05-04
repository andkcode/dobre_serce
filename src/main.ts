import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { Icon } from '@iconify/vue'
import { i18n } from './i18n'

// Redirect root path to language-specific path based on browser language
if (typeof window !== 'undefined' && window.location.pathname === '/') {
  const browserLang = navigator.language.toLowerCase()
  const lang = browserLang.startsWith('kk') ? 'kz' : 'ru'
  window.location.href = `/${lang}/`
}

const app = createApp(App)

app.component('Icon', Icon)
app.use(i18n)

app.mount('#app')