<script setup lang="ts">
interface AccommodationOption {
  icon: string
  title: string
  subtitle: string
  description: string
  gradient: string
  iconBg: string
}

const options: AccommodationOption[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>`,
    title: 'Кратковременное размещение',
    subtitle: 'Посуточно или на любой срок',
    description: 'Вы можете разместить своих близких посуточно или на любой удобный для вас срок. Идеально для отдыха или командировки.',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>`,
    title: 'Дневное размещение',
    subtitle: 'Днём здесь, ночью — дома',
    description: 'При необходимости вы можете разместить своего близкого на дневное время, а на ночь забрать домой. Удобный вариант для занятых семей.',
    gradient: 'from-brand-500 to-brand-700',
    iconBg: 'bg-brand-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
    title: 'Круглосуточное размещение',
    subtitle: 'Полный квалифицированный уход',
    description: 'Если у вас нет возможности обеспечить близким квалифицированный уход, мы возьмём эту обязанность на себя круглосуточно.',
    gradient: 'from-rose-500 to-pink-600',
    iconBg: 'bg-rose-50',
  },
]

const accepted = [
  'Здоровые пожилые люди',
  'Лежачие больные пожилого возраста',
  'Люди после травм и переломов (в т.ч. перелома шейки бедра)',
  'Люди, перенёсшие инсульт или инфаркт',
  'Люди с болезнью Альцгеймера',
  'Пожилые люди со старческой деменцией',
  'Пожилые люди после операций',
]

const notAccepted = [
  '4-я стадия онкологического заболевания',
  'Гепатит B или C',
  'Инфекционные заболевания',
  'Выраженное агрессивное поведение',
]
</script>

<template>
  <section id="accommodation" class="bg-ivory-50 py-28 lg:py-36">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <div class="mb-16 text-center" data-animate>
        <div class="eyebrow mb-5 justify-center">Варианты проживания</div>
        <h2 class="section-title mb-5">
          Выберите удобный<br />
          <em class="font-display italic font-400" style="color: var(--color-brand-600);">формат проживания</em>
        </h2>
      </div>

      <div class="mb-20 grid gap-7 md:grid-cols-3">
        <div
          v-for="(option, i) in options"
          :key="option.title"
          class="group relative overflow-hidden rounded-3xl border border-ivory-200 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
          :class="`animation-delay-${i * 100}`"
          data-animate
        >
          <div
            :class="`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`"
          />

          <div class="relative z-10">
            <div
              :class="`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${option.iconBg} transition-colors duration-300 group-hover:bg-white/20`"
            >
              <span
                class="h-7 w-7 transition-colors duration-300"
                style="color: var(--color-brand-600);"
                :class="'group-hover:!text-white'"
                v-html="option.icon"
              />
            </div>

            <h3
              class="mb-1.5 font-display text-xl font-600 leading-snug text-ink-900 transition-colors duration-300 group-hover:text-white"
            >
              {{ option.title }}
            </h3>
            <p
              class="mb-4 font-body text-sm font-600 uppercase tracking-wider transition-colors duration-300 text-red-900 group-hover:text-white/70"
            >
              {{ option.subtitle }}
            </p>
            <p
              class="font-body text-sm leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-white/80"
            >
              {{ option.description }}
            </p>
          </div>

          <div
            class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-2" data-animate>

        <div
          class="rounded-3xl border p-8 transition-all duration-300 hover:shadow-card"
          style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-color: #bbf7d0;"
        >
          <div class="mb-6 flex items-center gap-3">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-2xl"
              style="background: #dcfce7;"
            >
              <svg class="h-6 w-6" style="color: #16a34a;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-display text-2xl font-600 text-ink-900">Кого мы принимаем</h3>
              <p class="font-body text-xs text-ink-400">Полный перечень состояний и диагнозов</p>
            </div>
          </div>
          <ul class="space-y-3">
            <li
              v-for="item in accepted"
              :key="item"
              class="flex items-start gap-3 font-body text-sm text-ink-700"
            >
              <svg
                class="mt-0.5 h-4 w-4 flex-shrink-0"
                style="color: #22c55e;"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="rounded-3xl border p-8 transition-all duration-300 hover:shadow-card"
          style="background: linear-gradient(135deg, #fff5f5, #ffe4e4); border-color: #fecaca;"
        >
          <div class="mb-6 flex items-center gap-3">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-2xl"
              style="background: #fee2e2;"
            >
              <svg class="h-6 w-6" style="color: #ef4444;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-display text-2xl font-600 text-ink-900">Противопоказания</h3>
              <p class="font-body text-xs text-ink-400">Случаи, требующие специализированной помощи</p>
            </div>
          </div>
          <ul class="mb-6 space-y-3">
            <li
              v-for="item in notAccepted"
              :key="item"
              class="flex items-start gap-3 font-body text-sm text-ink-700"
            >
              <svg
                class="mt-0.5 h-4 w-4 flex-shrink-0"
                style="color: #f87171;"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ item }}
            </li>
          </ul>
          <p class="font-body text-xs leading-relaxed" style="color: #b91c1c; opacity: 0.7;">
            * К сожалению, мы не в состоянии предоставить специализированную помощь в перечисленных случаях. Для уточнения — звоните нам.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>