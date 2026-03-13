<script setup lang="ts">
import { ref } from 'vue'
import img from '../assets/gallery/img.jpg'
import img1 from '../assets/gallery/img1.jpg'
import img2 from '../assets/gallery/img2.jpg'
import img3 from '../assets/gallery/img3.jpg'
import img4 from '../assets/gallery/img4.jpg'
import img5 from '../assets/gallery/img5.jpg'
import img6 from '../assets/gallery/img6.jpg'
import img7 from '../assets/gallery/img7.jpg'

interface GalleryImage {
  id: number
  src: string
  alt: string
  span?: string
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: img,
    alt: "Зелёный двор и фасад пансионата с колоннами",
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: img1,
    alt: 'Фасад здания пансионата с открытой террасой',
  },
  {
    id: 3,
    src: img2,
    alt: 'Просторная спальня с хрустальной люстрой',
  },
  {
    id: 4,
    src: img3,
    alt: 'Входной зал пансионата с люстрой и диваном',
    span: 'col-span-2',
  },
  {
    id: 5,
    src: img4,
    alt: 'Уютная спальня с камином и кожаными креслами',
  },
  {
    id: 6,
    src: img5,
    alt: 'Просторная кухня-столовая с большим обеденным столом',
  },
  {
    id: 7,
    src: img6,
    alt: 'Светлая комната с паркетом и белой мебелью',
  },
  {
    id: 8,
    src: img7,
    alt: "Санузел с мраморной плиткой и джакузи",
  },
]

const activeImage = ref<GalleryImage | null>(null)
const activeIndex = ref<number>(0)

function openLightbox(img: GalleryImage, idx: number) {
  activeImage.value = img
  activeIndex.value = idx
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  activeImage.value = null
  document.body.style.overflow = ''
}

function prevImage() {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length
  activeImage.value = images[activeIndex.value]
}

function nextImage() {
  activeIndex.value = (activeIndex.value + 1) % images.length
  activeImage.value = images[activeIndex.value]
}
</script>

<template>
  <section id="gallery" class="relative overflow-hidden py-28 lg:py-36" style="background: #1a2744;">
    <!-- Background pattern -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.03]"
      style="background-image: radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 32px 32px;"
    />
    <!-- Gold accent line top -->
    <div
      class="absolute left-0 right-0 top-0 h-px"
      style="background: linear-gradient(90deg, transparent, var(--color-gold-400), var(--color-brand-500), transparent);"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">

      <!-- ── Header ── -->
      <div class="mb-14 text-center" data-animate>
        <div class="mb-5 inline-flex items-center gap-3">
          <div class="h-px w-8" style="background: var(--color-gold-400);" />
          <span class="font-body text-xs font-600 uppercase tracking-[0.2em]" style="color: var(--color-gold-400);">
            Фотогалерея
          </span>
          <div class="h-px w-8" style="background: var(--color-gold-400);" />
        </div>
        <h2
          class="font-display font-700 text-white"
          style="font-size: clamp(2rem, 4vw, 3rem);"
        >
          Взгляните на наш<br />
          <em class="font-display italic font-400" style="color: var(--color-gold-300);">уютный пансионат</em>
        </h2>
      </div>

      <!-- ── Gallery grid ── -->
      <div class="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[220px]" data-animate>
        <button
          v-for="(image, i) in images"
          :key="image.id"
          :class="[
            'group relative overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-ink-900',
            image.span || '',
            `animation-delay-${Math.min(i * 100, 500)}`,
          ]"
          :aria-label="`Просмотреть фото: ${image.alt}`"
          @click="openLightbox(image, i)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-all duration-400 group-hover:bg-black/40"
          >
            <div
              class="flex h-12 w-12 scale-75 items-center justify-center rounded-full border border-white/60 bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
            >
              <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"/>
              </svg>
            </div>
            <!-- Caption -->
            <p
              class="absolute bottom-4 left-4 right-4 font-body text-xs text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100"
            >
              {{ image.alt }}
            </p>
          </div>

          <!-- Corner accent -->
          <div
            class="absolute left-3 top-3 h-5 w-5 border-l border-t border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div
            class="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </button>
      </div>
    </div>

    <!-- ── Lightbox ── -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeImage"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style="background: rgba(10, 9, 8, 0.95); backdrop-filter: blur(16px);"
          role="dialog"
          aria-modal="true"
          :aria-label="activeImage.alt"
          @click.self="closeLightbox"
          @keydown.esc="closeLightbox"
          @keydown.left="prevImage"
          @keydown.right="nextImage"
        >
          <!-- Close button -->
          <button
            class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label="Закрыть"
            @click="closeLightbox"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Prev / Next arrows -->
          <button
            class="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 md:left-8"
            aria-label="Предыдущее фото"
            @click="prevImage"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <button
            class="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 md:right-8"
            aria-label="Следующее фото"
            @click="nextImage"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
          </button>

          <!-- Image -->
          <Transition
            enter-active-class="transition duration-250 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            mode="out-in"
          >
            <img
              :key="activeImage.id"
              :src="activeImage.src"
              :alt="activeImage.alt"
              class="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </Transition>

          <!-- Caption + counter -->
          <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5">
            <p class="font-body text-sm text-white/55">{{ activeImage.alt }}</p>
            <p class="font-body text-xs text-white/30">{{ activeIndex + 1 }} / {{ images.length }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>