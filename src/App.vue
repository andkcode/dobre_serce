<script setup lang="ts">
import { ref, onMounted } from "vue"
import Loader from "@/components/Loader.vue"
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import AccommodationSection from '@/components/AccommodationSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import DocumentsSection from '@/components/DocumentsSection.vue'
import PriceSection from '@/components/PriceSection.vue'
import ContactsSection from '@/components/ContactsSection.vue'
import ReviewsSection from '@/components/ReviewsSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useI18n } from 'vue-i18n'
import { useSeo } from '@/composables/useSeo'

const { t } = useI18n()
const currentPath = typeof window !== 'undefined'
  ? window.location.pathname.replace(/^\/(ru|kz)(?=\/|$)/, '') || '/'
  : '/'

useSeo({
  title: t('seo.default.title'),
  description: t('seo.default.description'),
  keywords: t('seo.default.keywords'),
  path: currentPath,
})

const loading = ref(true)

onMounted(() => {
  const hide = () => setTimeout(() => { loading.value = false }, 800)

  if (document.readyState === 'complete') {
    hide()
  } else {
    window.addEventListener('load', hide, { once: true })
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <Loader v-if="loading" />
  </Transition>

  <div v-show="!loading" class="min-h-screen min-h-[100dvh]">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AccommodationSection />
      <GallerySection />
      <DocumentsSection />
      <PriceSection />
      <ContactsSection />
      <ReviewsSection />
    </main>
    <AppFooter />

    <!-- ── Floating phone button (mobile) ── -->
  <a
    href="tel:+380961462910"
    class="app-fab fixed right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift transition-all duration-300 lg:hidden"
    style="bottom: calc(env(safe-area-inset-bottom, 16px) + 16px); background: linear-gradient(135deg, var(--color-sapphire-700), var(--color-sapphire-800));"
    >
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <!-- FIX 3: pulse ring color matches button — sapphire-500 (was brand-400 gold) -->
      <span
        class="absolute inset-0 animate-ping rounded-full opacity-25"
        style="background: var(--color-sapphire-500);"
      />
    </a>
  </div>
</template>

<style scoped>
@media (hover: none) and (pointer: coarse) {
  .app-fab {
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
    transition: none !important;
  }

  .app-fab > span {
    animation: none !important;
  }
}
</style>