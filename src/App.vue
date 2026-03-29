<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
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
import AppFooter from '@/components/AppFooter.vue'
import { useScrollAnimation } from '@/composables/useScroll'
import { useLocale } from '@/composables/useLocale'

const { observeElements } = useScrollAnimation()
const { lang } = useLocale()
const loading = ref(true)
const showBackTop = ref(false)

const onScroll = () => {
  showBackTop.value = window.scrollY > 400
}

// FIX 1: scrollToTop was called in the template but never defined
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  observeElements('[data-animate]')

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // FIX 2: if the page already loaded before onMounted fires (common in Vite/HMR),
  // document.readyState will already be 'complete' and the 'load' event never fires —
  // the loader would stay on screen forever.
  // Solution: check readyState first, fall back to the event only if still loading.
  const hide = () => setTimeout(() => { loading.value = false }, 1200)

  if (document.readyState === 'complete') {
    hide()
  } else {
    window.addEventListener('load', hide, { once: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
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

  <div v-show="!loading" class="min-h-screen">
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
    </main>
    <AppFooter />

    <!-- ── Floating phone button (mobile) ── -->
    <a
      href="tel:+380961462910"
      class="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift transition-all duration-300 hover:scale-110 lg:hidden"
      style="background: linear-gradient(135deg, var(--color-sapphire-700), var(--color-sapphire-800));"
      :aria-label="lang === 'kk' ? 'Қоңырау шалу' : 'Позвонить'"
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

    <!-- ── Back to top button ── -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <button
        v-if="showBackTop"
        class="fixed bottom-6 left-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border text-white/70 transition-all duration-200 hover:text-white lg:h-11 lg:w-11"
        style="background: rgba(0,36,85,0.75); border-color: rgba(249,189,21,0.20); backdrop-filter: blur(12px);"
        :aria-label="lang === 'kk' ? 'Жоғарыға' : 'Наверх'"
        @click="scrollToTop"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>