<script setup lang="ts">
interface ServiceItem {
  icon: string
  title: string
  description: string
  accent: string
}

const services: ServiceItem[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/></svg>`,
    title: 'Медицинский надзор',
    description:
      'Еженедельно проводится медицинский осмотр. Ежедневно измеряется давление, пульс и температура тела каждого проживающего.',
    accent: 'from-rose-50 to-red-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/></svg>`,
    title: 'Круглосуточная медсестра',
    description:
      'Сиделки обеспечивают круглосуточное наблюдение. Медицинский пост для оказания экстренной помощи.',
    accent: 'from-sky-50 to-blue-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"/></svg>`,
    title: 'Сбалансированное питание',
    description:
      'Пятиразовое питание с учётом диетических требований и индивидуальных предпочтений каждого проживающего.',
    accent: 'from-amber-50 to-yellow-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"/></svg>`,
    title: 'Ежедневные прогулки',
    description:
      'Ежедневные прогулки на открытом воздухе в сопровождении персонала для поддержания активности и хорошего настроения.',
    accent: 'from-emerald-50 to-green-50',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>`,
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
          <em class="font-display font-400 italic" style="color: var(--color-brand-600)"
            >за вашими близкими</em
          >
        </h2>
        <p class="section-subtitle mx-auto max-w-2xl">
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