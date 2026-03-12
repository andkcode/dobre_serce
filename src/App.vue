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
import AppFooter from '@/components/AppFooter.vue'

import { useScrollAnimation } from '@/composables/useScroll'

const { observeElements } = useScrollAnimation()

const loading = ref(true)
const showBackTop = ref(false)

onMounted(() => {

  observeElements('[data-animate]')

  const onScroll = () => {
    showBackTop.value = window.scrollY > 400
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  window.addEventListener("load", () => {
    setTimeout(() => {
      loading.value = false
    }, 1200)
  })

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
      class="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-brand-lg transition-all duration-300 hover:scale-110 lg:hidden"
      style="background: linear-gradient(135deg, var(--color-brand-600), var(--color-brand-700));"
      aria-label="Зателефонувати"
    >
      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <!-- Pulse ring -->
      <span
        class="absolute inset-0 animate-ping rounded-full opacity-25"
        style="background: var(--color-brand-400);"
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
        style="background: rgba(15,13,11,0.7); border-color: rgba(255,255,255,0.12); backdrop-filter: blur(12px);"
        aria-label="Нагору"
        @click="scrollToTop"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>