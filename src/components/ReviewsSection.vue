<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const reviewSources = [
  {
    name: '2GIS',
    rating: '5.0',
    href: 'https://2gis.kz/astana/firm/70000001059285683/tab/reviews',
    accent: 'var(--color-sage-600)',
    glow: 'linear-gradient(135deg, rgba(12, 177, 149, 0.16), rgba(12, 177, 149, 0.04))',
  },
  {
    name: 'Google',
    rating: '4.9',
    href: 'https://2gis.kz/astana/firm/70000001059285683/tab/reviews',
    accent: 'var(--color-sapphire-600)',
    glow: 'linear-gradient(135deg, rgba(67, 163, 216, 0.18), rgba(67, 163, 216, 0.04))',
  },
]

const stars = Array.from({ length: 5 }, (_, index) => index)
</script>

<template>
  <section id="reviews" class="relative overflow-hidden pb-20 lg:pb-32">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-40"
      style="background: linear-gradient(180deg, rgba(249, 189, 21, 0.08), rgba(249, 189, 21, 0));"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="rounded-[2rem] border border-white/70 bg-white/88 p-6 backdrop-blur-sm md:p-8 lg:p-10">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-2xl" data-animate>
            <div class="eyebrow mb-5">{{ t('reviews.eyebrow') }}</div>
            <h2 class="section-title mb-4">
              <span class="text-sapphire-800">{{ t('reviews.titleBlue') }}</span>
              <br>
              <span class="text-brand-500">{{ t('reviews.titleGold') }}</span>
            </h2>
            <p class="section-subtitle max-w-xl">
              {{ t('reviews.subtitle') }}
            </p>
          </div>

          <a
            data-animate
            href="https://2gis.kz/astana/firm/70000001059285683/tab/reviews"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full shrink-0 md:w-auto"
          >
            {{ t('reviews.cta') }}
          </a>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:mt-10">
          <a
            v-for="source in reviewSources"
            :key="source.name"
            :href="source.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative overflow-hidden rounded-[1.75rem] border border-ivory-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card md:p-6"
            data-animate
          >
            <div
              class="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              :style="{ background: source.glow }"
            />

            <div class="relative flex items-start justify-between gap-4">
              <div>
                <div class="text-xs font-600 uppercase tracking-[0.3em] text-ink-400">{{ t('reviews.platformLabel') }}</div>
                <div class="mt-2 text-2xl font-700 tracking-[0.08em] text-ink-900">{{ source.name }}</div>
              </div>

              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-700 text-white shadow-sapphire"
                :style="{ background: source.accent }"
              >
                {{ source.rating }}
              </div>
            </div>

            <div class="relative mt-6 flex items-center gap-1.5">
              <svg
                v-for="star in stars"
                :key="star"
                class="h-5 w-5 text-brand-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            </div>

            <div class="relative mt-5 flex items-center justify-between gap-3 text-sm text-ink-500">
              <span>{{ t('reviews.note') }}</span>
              <span class="font-600 text-sapphire-700 transition-transform duration-300 group-hover:translate-x-1">
                {{ t('reviews.linkLabel') }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>