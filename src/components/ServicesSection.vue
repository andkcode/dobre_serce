<script setup lang="ts">
interface ServiceItem {
  icon: string
  title: string
  description: string
  accent: string
}

const services: ServiceItem[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 14.235V17a5 5 0 0 0 5 5h.882a4.12 4.12 0 0 0 3.964-3" opacity="0.5"/><path stroke-linecap="round" d="M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 0 0 7 7a6.714 6.714 0 0 0 6.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 0 0-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091"/><circle cx="19" cy="16" r="3"/><path stroke-linecap="round" d="M12 2v2M6 2v2"/></g></svg>`,
    title: 'Медицинский уход',
    description:
      'Еженедельно проводится медицинский осмотр. Ежедневно измеряется давление, пульс и температура тела каждого проживающего.',
    accent: 'from-rose-50 to-red-50',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M10.156 4L10 4.813l-1 5.625V14h.094a7.03 7.03 0 0 0 3 4.813C8.527 20.343 6 23.883 6 28h2a7.99 7.99 0 0 1 3-6.25v.656l.281.313l4 4l.719.687l.719-.687l4-4l.281-.313v-.656A7.99 7.99 0 0 1 24 28h2c0-4.117-2.527-7.656-6.094-9.188a7.03 7.03 0 0 0 3-4.812H23v-3.563l-1-5.624L21.844 4zm1.688 2h8.312L21 10.781V12H11v-1.219zM15 7v1h-1v2h1v1h2v-1h1V8h-1V7zm-3.906 7h9.812A5 5 0 0 1 16 18a5 5 0 0 1-4.906-4M16 20a8 8 0 0 1 3 .563v1l-3 3l-3-3v-1A8 8 0 0 1 16 20"/></svg>`,
    title: 'Круглосуточная медсестра',
    description:
      'Сиделки обеспечивают круглосуточное наблюдение. Медицинский пост для оказания экстренной помощи.',
    accent: 'from-sky-50 to-blue-50',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M45.5 4c-11.046 0-20 8.954-20 20s8.954 20 20 20"/><path d="M45.5 12c-6.627 0-12 5.373-12 12s5.373 12 12 12M19.945 6.358c.46 2.718 1.104 7.467 1.052 12.538c-.026 2.617-1.774 4.962-4.522 5.578c-.568.127-1.173.242-1.805.331l1.784 13.933c.314 2.451-1.195 4.88-3.645 5.2c-.303.039-.58.062-.809.062a7 7 0 0 1-.81-.063c-2.45-.32-3.958-2.748-3.644-5.199L9.33 24.805a23 23 0 0 1-1.804-.33c-2.749-.617-4.497-2.963-4.524-5.58c-.051-5.07.591-9.818 1.051-12.536C4.287 4.974 5.499 4 6.903 4h10.192c1.405 0 2.616.973 2.85 2.358M9.5 4L9 15m5.5-11l.5 11"/></g></svg>`,
    title: 'Сбалансированное питание',
    description:
      'Пятиразовое питание с учётом диетических требований и индивидуальных предпочтений каждого проживающего.',
    accent: 'from-amber-50 to-yellow-50',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M14.422 3.75a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 1 0 3zm3 17.25a2.249 2.249 0 1 0 4.498 0a2.249 2.249 0 0 0-4.498 0M5.939 22.318a.75.75 0 0 1-.728.932H2.633a.75.75 0 0 1-.728-.932l.375-1.5a.75.75 0 0 1 .728-.568h1.828a.75.75 0 0 1 .728.568z"/><path d="M3.922 20.25L6.3 6.01a4.5 4.5 0 0 1 4.439-3.76h2.188"/><path d="M5.172 12.75h9.987a3 3 0 0 1 2.885 2.176l.948 3.93"/></g></svg>`,
    title: 'Ежедневные прогулки',
    description:
      'Ежедневные прогулки на открытом воздухе в сопровождении персонала для поддержания активности и хорошего настроения.',
    accent: 'from-emerald-50 to-green-50',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8.922 3.7L7.81 4.81L6.444 6.179a3.326 3.326 0 0 0 3.378 3.378L11.19 8.19l1.11-1.11A2.39 2.39 0 0 0 8.922 3.7M7 3.5l-2 2l-2.36 2.36a3.89 3.89 0 1 0 5.5 5.5L10.5 11l2-2l.86-.86a3.889 3.889 0 1 0-5.5-5.5zm.078 8.8l1.413-1.412A4.85 4.85 0 0 1 5.11 7.51L3.7 8.922A2.39 2.39 0 0 0 7.078 12.3m.892-6.33a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"/></svg>`,
    title: 'Медикаментозный контроль',
    description:
      'Выдача назначенных врачом лекарств, контроль за приёмом медикаментов и еженедельная консультация врача-терапевта.',
    accent: 'from-violet-50 to-purple-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>`,
    title: 'Онлайн-встречи с родственниками',
    description:
      'Организация видеозвонков с родными через Skype, Viber, Facebook Messenger для поддержания семейной связи.',
    accent: 'from-cyan-50 to-teal-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`,
    title: 'Гигиенический уход',
    description:
      'Проведение гигиенических процедур, помощь при передвижении, кормление лежачих больных квалифицированным персоналом.',
    accent: 'from-pink-50 to-rose-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: 'Индивидуальное внимание',
    description:
      'Постоянный контроль за здоровьем, психологическая поддержка и индивидуальный подход к каждому проживающему.',
    accent: 'from-orange-50 to-amber-50',
  },
]
</script>

<template>
  <section
    id="services"
    class="relative overflow-hidden py-28 lg:py-36"
    style="background: var(--color-ivory-100)"
  >
    <!-- Background texture -->
    <div class="dot-grid pointer-events-none absolute inset-0 opacity-40" />
    <div
      class="via-brand-200 pointer-events-none absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- ── Header ── -->
      <div class="mb-16 text-center" data-animate>
        <div class="eyebrow mb-5 justify-center">Наши услуги</div>
        <h2 class="section-title mb-5">
          Комплексный уход<br />
          <em class="font-display font-400 italic" style="color: var(--color-brand-600);"
            >за вашими близкими</em
          >
        </h2>
        <p class="section-subtitle mx-auto max-w-2xl font-medium">
          Наш пансионат обеспечивает благоприятные условия для проживания пожилых людей и ведения
          ими активного образа жизни и полноценного отдыха.
        </p>
      </div>

      <!-- ── Services grid ── -->
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group shadow-card border-ivory-200 hover:shadow-card-hover hover:border-brand-100 relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-400 hover:-translate-y-1.5"
          :class="`animation-delay-${Math.min(index * 75, 600)}`"
          data-animate
        >
          <!-- Hover accent top bar -->
          <div
            class="absolute top-0 right-0 left-0 h-0.5 origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
            style="
              background: linear-gradient(90deg, var(--color-brand-600), var(--color-gold-400));
            "
          />

          <!-- Icon container -->
          <div
            :class="`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} transition-transform duration-300 group-hover:scale-110`"
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span
              class="text-brand-600 h-6 w-6"
              style="color: var(--color-brand-600)"
              v-html="service.icon"
            />
          </div>

          <h3 class="font-display font-600 text-ink-900 mb-2.5 text-lg leading-snug">
            {{ service.title }}
          </h3>
          <p class="font-body text-ink-500 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>

      <!-- ── Bottom CTA strip ── -->
      <div
        class="mt-16 flex flex-col items-center gap-6 rounded-3xl p-10 text-center"
        style="
          background: linear-gradient(
            135deg,
            var(--color-brand-600) 0%,
            var(--color-brand-800) 100%
          );
        "
        data-animate
      >
        <img src="../assets/logo.png" alt="Логотип Доброе сердце" class="h-14 w-14" />
        <div>
          <h3 class="font-display font-700 text-2xl text-white md:text-3xl">
            Есть вопросы об услугах?
          </h3>
          <p class="font-body font-300 mt-2 text-sm text-white/65">
            Позвоните или оставьте заявку — наш консультант ответит на все ваши вопросы
          </p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="tel:+380961462910" class="btn-ghost">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              />
            </svg>
            Позвонить
          </a>
          <button
            class="font-body font-600 text-brand-700 hover:bg-ivory-50 rounded-full bg-white px-6 py-2.5 text-xs tracking-wider uppercase transition-all hover:-translate-y-0.5"
            @click="
              $el.ownerDocument.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })
            "
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  </section>
</template>