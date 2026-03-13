<script setup lang="ts">
import garden from "../assets/hero/garden.mp4"
import gardenMobile from "../assets/hero/garden-mobile.mp4"

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    class="relative flex min-h-screen items-center overflow-hidden"
    aria-label="Главный баннер"
  >
    <!-- ── Layered background ── -->
    <div class="absolute inset-0">
      <video
        autoplay muted loop playsinline preload="auto"
        class="h-full w-full object-cover hero-video"
      >
        <source :src="gardenMobile" media="(max-width: 767px)" type="video/mp4" />
        <source :src="garden" type="video/mp4" />
      </video>
      <!-- Multi-layer gradient for depth -->
      <div class="absolute inset-0 bg-hero-gradient" />
      <!-- Warm vignette bottom -->
      <div
        class="absolute bottom-0 left-0 right-0 h-2/3"
        style="background: linear-gradient(to top, rgba(15,13,11,0.65) 0%, transparent 100%)"
      />
      <!-- Subtle noise texture overlay -->
      <div
        class="absolute inset-0 opacity-[0.03]"
        style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22 numOctaves=%224%22/><feColorMatrix type=%22saturate%22 values=%220%22/></filter><rect width=%22300%22 height=%22300%22 filter=%22url(%23n)%22 opacity=%221%22/></svg>')"
      />
      <!-- Decorative fine dot grid (very subtle) -->
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 36px 36px;"
      />
    </div>

    <!-- ── Floating orbs ── -->
    <div
      class="animate-float absolute right-[8%] top-[15%] h-80 w-80 rounded-full opacity-[0.08]"
      style="background: radial-gradient(circle, #dcc07e 0%, transparent 70%); animation-delay: 0s;"
    />
    <div
      class="animate-drift absolute bottom-[18%] left-[4%] h-56 w-56 rounded-full opacity-[0.06]"
      style="background: radial-gradient(circle, #b33628 0%, transparent 70%); animation-delay: 2s;"
    />
    <div
      class="animate-float absolute left-[35%] top-[10%] h-40 w-40 rounded-full opacity-[0.04]"
      style="background: radial-gradient(circle, #ffffff 0%, transparent 70%); animation-delay: 3.5s;"
    />

    <!-- ── Decorative vertical line (left) ── -->
    <div
      class="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      <div class="h-20 w-px bg-gradient-to-b from-transparent via-white/20 to-white/40" />
      <div
        class="animate-rotate-slow flex h-7 w-7 items-center justify-center rounded-full border border-white/20"
        style="animation-duration: 15s;"
      >
        <div class="h-1 w-1 rounded-full bg-white/50" />
      </div>
      <div class="h-20 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
    </div>

    <!-- ── Main content ── -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8 xl:px-16">
      <div class="max-w-3xl">

        <!-- Badge pill -->
        <div
          class="mb-8 animate-fade-in inline-flex items-center gap-2.5 rounded-full px-4 py-2 glass-dark"
        >
          <div class="relative">
            <img
              src="../assets/logo.png"
              alt="Логотип Доброе сердце"
              class="h-6 w-6 rounded-full ring-1 ring-white/20"
            />
          </div>
          <span class="font-body text-xs font-500 tracking-widest text-white/80 uppercase">
            Пансионат «Добре сердце» · Астана, Казахстан
          </span>
        </div>

        <!-- Headline -->
        <h1
          class="delay-100 animate-fade-up font-display leading-none tracking-tight text-white text-balance"
          style="font-size: clamp(3rem, 6.5vw, 5.5rem); font-weight: 700; line-height: 1.08;"
        >
          Комфорт и забота<br />
          <em
            class="font-display italic"
            style="font-weight: 400; color: #dcc07e;"
          >для ваших близких</em>
        </h1>

        <!-- Decorative gold line -->
        <div
          class="delay-200 animate-fade-in mt-7 mb-8 h-px w-24 origin-left"
          style="background: linear-gradient(90deg, #c9a94e, transparent);"
        />

        <!-- Subheadline -->
        <p
          class="delay-200 animate-fade-up max-w-xl font-body text-lg font-300 leading-relaxed text-white/72 md:text-xl"
          style="color: rgba(255,255,255,0.72);"
        >
          Наш пансионат — место, где каждый проживающий чувствует себя
          дома: тёплая атмосфера, специалисты рядом и полноценная
          активная жизнь под заботливым надзором.
        </p>

        <!-- Stats row -->
        <div
          class="delay-300 animate-fade-up mt-12 flex flex-wrap gap-8"
        >
          <div v-for="stat in stats" :key="stat.value" class="flex flex-col gap-1">
            <div
              class="font-display font-700 text-white"
              style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1;"
            >
              {{ stat.value }}
            </div>
            <div class="font-body text-xs font-400 uppercase tracking-widest text-white/50">
              {{ stat.label }}
            </div>
          </div>

          <div class="w-px self-stretch bg-white/15 mx-2 hidden sm:block" />

          <div class="flex flex-col gap-1">
            <div
              class="font-display font-700 text-white"
              style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1;"
            >
              5×
            </div>
            <div class="font-body text-xs font-400 uppercase tracking-widest text-white/50">
              Питание в день
            </div>
          </div>

          <div class="w-px self-stretch bg-white/15 mx-2 hidden sm:block" />

          <div class="flex flex-col gap-1">
            <div
              class="font-display font-700 text-white"
              style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1;"
            >
              100%
            </div>
            <div class="font-body text-xs font-400 uppercase tracking-widest text-white/50">
              Индивидуальный подход
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="delay-400 animate-fade-up mt-11 flex flex-wrap items-center gap-4">
          <button class="btn-primary" @click="scrollTo('#contacts')">
            Записаться в пансионат
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button class="btn-ghost" @click="scrollTo('#about')">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
            </svg>
            Узнать больше
          </button>
        </div>
      </div>
    </div>

    <!-- ── Scroll indicator ── -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="font-body text-[10px] uppercase tracking-[0.2em] text-white/40">Листайте</span>
      <button
        class="animate-scroll flex flex-col items-center"
        aria-label="Прокрутить вниз"
        @click="scrollTo('#about')"
      >
        <div
          class="h-8 w-5 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <div class="h-1.5 w-1 rounded-full bg-white/60" />
        </div>
      </button>
    </div>

    <!-- ── Bottom decorative band ── -->
    <div
      class="absolute bottom-0 left-0 right-0 h-px"
      style="background: linear-gradient(90deg, transparent 0%, rgba(201,169,78,0.4) 30%, rgba(201,169,78,0.4) 70%, transparent 100%);"
    />
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      stats: [
        { value: '24/7', label: 'Круглосуточный уход' },
      ]
    }
  }
}
</script>