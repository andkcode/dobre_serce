<!--
  HeroSection.vue — COLORS ONLY CHANGED
  Changes:
    • #dcc07e headline italic/line → var(--color-brand-500) #F9BD15 (unified gold token)
    • Floating orb gold #dcc07e → brand-500
    • Floating orb red #b33628 → sapphire-900 (calm, on-brand, not alarming)
    • stat divider border-white unchanged (functional)
    • bg-hero-gradient → unchanged (uses CSS var already correct)
-->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import garden from "../assets/hero/garden.mp4"
import gardenMobile from "../assets/hero/garden-mobile.mp4"
import heroFallback from "../assets/gallery/img.jpg"
import { useLocale } from '@/composables/useLocale'

const { lang } = useLocale()
const useVideo = ref(true)
const heroVideoRef = ref<HTMLVideoElement | null>(null)
let onVisibilityChange: (() => void) | null = null

const ui = computed(() => {
  if (lang.value === 'kk') {
    return {
      aria: 'Басты баннер',
      titleBlue: 'Жайлылық пен қамқорлық',
      titleGold: 'жақындарыңыз үшін',
      subtitle:
        'Біздің пансионат - әрбір тұрғын өзін үйдегідей сезінетін орын: жылы атмосфера, білікті мамандар және белсенді өмір.',
      statLabel: 'Тәулік бойы күтім',
      mealLabel: 'Күніне 4 рет тамақтану',
      ctaPrimary: 'Пансионатқа жазылу',
      ctaSecondary: 'Толығырақ білу',
      scrollHint: 'Төмен сырғытыңыз',
      scrollButtonAria: 'Төменге сырғыту',
    }
  }

  return {
    aria: 'Главный баннер',
    titleBlue: 'Комфорт и забота',
    titleGold: 'для ваших близких',
    subtitle:
      'Наш пансионат — место, где каждый проживающий чувствует себя дома: тёплая атмосфера, специалисты рядом и полноценная активная жизнь под заботливым присмотром.',
    statLabel: 'Круглосуточный уход',
    mealLabel: 'Питание в день',
    ctaPrimary: 'Записаться в пансионат',
    ctaSecondary: 'Узнать больше',
    scrollHint: 'Листайте',
    scrollButtonAria: 'Прокрутить вниз',
  }
})

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const stats = computed(() => [
  {
    value: '24/7',
    label: ui.value.statLabel,
  },
])

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true

  // Disable heavy hero video on constrained devices to reduce jank and bandwidth.
  useVideo.value = !(prefersReducedMotion || isMobile || saveData)

  onVisibilityChange = () => {
    const video = heroVideoRef.value
    if (!video) return
    if (document.hidden) {
      video.pause()
    } else if (useVideo.value) {
      void video.play().catch(() => undefined)
    }
  }

  document.addEventListener('visibilitychange', onVisibilityChange)
})

onUnmounted(() => {
  if (onVisibilityChange) {
    document.removeEventListener('visibilitychange', onVisibilityChange)
  }
})
</script>

<template>

  <section
    class="relative flex min-h-screen items-center overflow-hidden"
    :aria-label="ui.aria"
  >
    <!-- ── Layered background ── -->
    <div class="absolute inset-0">
      <video
        v-if="useVideo"
        ref="heroVideoRef"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        :poster="heroFallback"
        class="h-full w-full object-cover hero-video"
      >
        <source :src="gardenMobile" media="(max-width: 767px)" type="video/mp4" />
        <source :src="garden" type="video/mp4" />
      </video>
      <img
        v-else
        :src="heroFallback"
        alt=""
        class="h-full w-full object-cover hero-video"
        decoding="async"
        fetchpriority="high"
      />
      <!-- Multi-layer gradient for depth -->
      <div class="absolute inset-0 bg-hero-gradient" />
      <!-- Warm vignette bottom -->
      <div
        class="absolute bottom-0 left-0 right-0 h-2/3"
        style="background: linear-gradient(to top, rgba(15,13,11,0.65) 0%, transparent 100%)"
      />
      <!-- Subtle noise texture overlay -->
      <div
        class="absolute inset-0 hidden opacity-[0.03] md:block"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22 numOctaves=%224%22/><feColorMatrix type=%22saturate%22 values=%220%22/></filter><rect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>')"
      />
    </div>

    <!-- Orb 1: brand-500 gold (was #dcc07e warm gold — unified) -->
    <div
      class="animate-float absolute right-[8%] top-[15%] h-80 w-80 rounded-full opacity-[0.08]"
      style="background: radial-gradient(circle, var(--color-brand-500) 0%, transparent 70%); animation-delay: 0s;"
    />
    <!-- Orb 2: sapphire-900 deep (was #b33628 red — replaced with on-brand calm dark) -->
    <div
      class="animate-drift absolute bottom-[18%] left-[4%] h-56 w-56 rounded-full opacity-[0.06]"
      style="background: radial-gradient(circle, var(--color-sapphire-900) 0%, transparent 70%); animation-delay: 2s;"
    />
    <!-- Orb 3: white — unchanged -->
    <div
      class="animate-float absolute left-[35%] top-[10%] h-40 w-40 rounded-full opacity-[0.04]"
      style="background: radial-gradient(circle, #ffffff 0%, transparent 70%); animation-delay: 3.5s;"
    />

    <div class="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <div class="h-20 w-px bg-gradient-to-b from-transparent via-white/20 to-white/40" />
      <div class="animate-rotate-slow flex h-7 w-7 items-center justify-center rounded-full border border-white/20" style="animation-duration: 15s;">
        <div class="h-1 w-1 rounded-full bg-white/50" />
      </div>
      <div class="h-20 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28 xl:px-16">
      <div class="lg:max-w-3xl">

        <h1 class="delay-100 animate-fade-up font-display leading-none tracking-tight text-white text-center lg:text-left w-full"
          style="font-size: clamp(1.95rem, 8.2vw, 5.5rem); font-weight: 400; line-height: 1.05;"
        >
          {{ ui.titleBlue }}<br />
          <span style="color: var(--color-brand-500);">{{ ui.titleGold }}</span>
        </h1>

        <!-- decorative line: brand-500 → transparent (was #DAA532 → transparent) -->
        <div
          class="delay-200 animate-fade-in mt-7 mb-8 h-px w-24 origin-left"
          style="background: linear-gradient(90deg, var(--color-brand-500), transparent);"
        />

        <p class="delay-200 animate-fade-up max-w-xl font-body text-lg font-300 leading-relaxed md:text-xl" style="color: rgba(255,255,255,0.72);">
          {{ ui.subtitle }}
        </p>

        <div class="delay-300 animate-fade-up mt-10 flex flex-wrap items-start gap-5 sm:mt-12 sm:gap-8">
          <div v-for="stat in stats" :key="stat.value" class="flex flex-col gap-1">
            <div class="font-display font-700 text-white" style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1;">{{ stat.value }}</div>
            <div class="font-body text-xs font-400 uppercase tracking-widest text-white/50">{{ stat.label }}</div>
          </div>
          <div class="w-px self-stretch bg-white/15 mx-2 hidden sm:block" />
          <div class="flex flex-col gap-1">
            <div class="font-display font-700 text-white" style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1;">4×</div>
            <div class="font-body text-xs font-400 uppercase tracking-widest text-white/50">{{ ui.mealLabel }}</div>
          </div>
        </div>

        <div class="delay-400 animate-fade-up mt-9 flex flex-wrap items-center gap-3 sm:mt-11 sm:gap-4">
          <button class="btn-primary" @click="scrollTo('#contacts')">
            {{ ui.ctaPrimary }}
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button class="btn-ghost" @click="scrollTo('#about')">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            {{ ui.ctaSecondary }}
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
      <span class="font-body text-[10px] uppercase tracking-[0.2em] text-white/40">{{ ui.scrollHint }}</span>
      <button class="animate-scroll flex flex-col items-center" :aria-label="ui.scrollButtonAria" @click="scrollTo('#about')">
        <div class="h-8 w-5 rounded-full border border-white/25 flex items-start justify-center pt-1.5">
          <div class="h-1.5 w-1 rounded-full bg-white/60" />
        </div>
      </button>
    </div>

    <!-- bottom gold line: brand-500 (was rgba(201,169,78,...)) -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px"
      style="background: linear-gradient(90deg, transparent 0%, rgba(249,189,21,0.45) 30%, rgba(249,189,21,0.45) 70%, transparent 100%);"
    />
  </section>
</template>