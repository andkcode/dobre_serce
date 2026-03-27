<!--
  DocumentsSection.vue — COLORS ONLY CHANGED
  Changes:
    • brand-600 gradient → sapphire-800 → sapphire-700 (card gradient becomes sapphire, not gold)
    • brand-600 inline colors → sapphire-700 (icon accents)
    • bg-brand-50/100 list icons → sapphire-50/100
    • italic em: brand-600 → brand-500 gold (unified)
-->
<script setup lang="ts">
import logoBlue from "../assets/logo-blue.png"
const documents = [
  'Ксерокопии паспортов (родственника, заключающего договор, и будущего проживающего)',
  'Письменное согласие будущего проживающего на размещение',
  'Медицинская карта с имеющимися справками и заключениями врачей',
  'Справка от психиатра (при необходимости)',
]
</script>

<template>
  <section id="documents" class="relative overflow-hidden py-20 lg:py-32" style="background: var(--color-ivory-100);">
    <div
      class="pointer-events-none absolute right-0 top-1/2 h-[360px] w-[360px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-50 sm:h-[600px] sm:w-[600px]"
      style="background: radial-gradient(circle, var(--color-brand-50) 0%, transparent 70%);"
    />
    <div class="absolute left-0 right-0 top-0 h-px" style="background: linear-gradient(90deg, transparent, var(--color-ivory-300), transparent);" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-start gap-16 lg:grid-cols-2 xl:gap-24">

        <div data-animate>
          <div class="eyebrow mb-5">Документы</div>
          <h2 class="section-title mb-6">
            Необходимые<br />
            <em class="font-display italic font-400" style="color: var(--color-brand-500); font-size: clamp(1.7rem, 4vw, 2.3rem);">документы для поступления</em>
          </h2>
          <div class="gold-divider mb-8" />
          <p class="section-subtitle mb-10 leading-prose">
            Для того чтобы поступить в пансионат, необходимо подготовить
            следующий перечень документов. Если у вас возникнут вопросы —
            позвоните нам, и мы поможем со всеми нюансами.
          </p>

          <div
            class="group relative overflow-hidden rounded-3xl border border-ivory-200 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(0,36,85,0.18)]"
            style="background: linear-gradient(160deg, rgba(255,255,255,0.98) 0%, var(--color-sapphire-50) 62%, rgba(255,255,255,0.95) 100%);"
          >
            <div
              class="pointer-events-none absolute -right-20 -top-16 h-48 w-48 rounded-full blur-2xl"
              style="background: radial-gradient(circle, rgba(0,99,181,0.22) 0%, rgba(0,99,181,0) 70%);"
            />
            <img
              src="https://dobroe-serdce.com.ua/wp-content/uploads/2019/07/favicon-512-02.png"
              alt=""
              class="pointer-events-none absolute right-5 top-5 h-16 w-16 opacity-[0.09] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
            />

            <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border"
                  style="background: linear-gradient(145deg, var(--color-sapphire-700), var(--color-sapphire-800)); border-color: rgba(255, 255, 255, 0.35);"
                >
                  <Icon icon="streamline:ambulance" class="h-6 w-6 text-white" />
                </div>
                <h3 class="font-display text-[1.15rem] leading-tight font-600 text-ink-900 sm:text-[1.3rem]">Индивидуальный трансфер</h3>
              </div>
              <span
                class="self-start inline-flex items-center rounded-full px-3 py-1 font-body text-[11px] font-500 uppercase tracking-[0.12em]"
                style="background: var(--color-brand-100); color: var(--color-gold-600);"
              >
                24/7 поддержка
              </span>
            </div>

            <p class="font-body text-sm leading-relaxed font-400 text-ink-700/95">
              При необходимости организуем безопасную и комфортную доставку постояльца прямо в пансионат.
              Учитываем состояние здоровья, подбираем удобный маршрут и сопровождаем на каждом этапе поездки.
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span class="rounded-full border px-3 py-1 text-xs font-500" style="border-color: var(--color-sapphire-200); background: var(--color-sapphire-100); color: var(--color-sapphire-800);">
                Бережное сопровождение
              </span>
              <span class="rounded-full border px-3 py-1 text-xs font-500" style="border-color: var(--color-sapphire-200); background: var(--color-sapphire-100); color: var(--color-sapphire-800);">
                Комфортный транспорт
              </span>
              <span class="rounded-full border px-3 py-1 text-xs font-500" style="border-color: var(--color-sapphire-200); background: var(--color-sapphire-100); color: var(--color-sapphire-800);">
                По Астане и области
              </span>
            </div>
          </div>
        </div>

        <div data-animate class="delay-200">
          <div class="rounded-3xl bg-white p-8 shadow-card border border-ivory-200">
            <div class="mb-7 flex items-center gap-4 border-b border-ivory-200 pb-6">
              <img src="../assets/logo.png" alt="Доброе сердце" class="h-10 w-10" />
              <div>
                <h3 class="font-display text-2xl font-600 text-ink-900">Перечень документов</h3>
                <p class="font-body text-xs text-ink-400">{{ documents.length }} позиций</p>
              </div>
            </div>

            <ol class="space-y-4">
              <li
                v-for="doc in documents"
                :key="doc"
                class="group flex items-start gap-4 transition-colors duration-200 hover:bg-sapphire-50 -mx-3 px-3 py-2 rounded-xl"
              >
                <div class="flex h-7 w-7 flex-shrink-0 items-center justify-center">
                  <img
                    :src="logoBlue"
                    alt="icon"
                    class="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <span class="font-body text-sm leading-relaxed text-ink-700">{{ doc }}</span>
              </li>
            </ol>

            <a href="tel:+380961462910" class="btn-primary mt-8 w-full justify-center">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Уточнить
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>