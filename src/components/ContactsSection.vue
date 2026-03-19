<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  message: '',
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1200))
  isSubmitting.value = false
  isSubmitted.value = true
  formData.value = { name: '', phone: '', message: '' }
}
</script>

<template>
  <section id="contacts" class="relative overflow-hidden py-28 lg:py-36" style="background: var(--color-ivory-100);">
    <div
      class="pointer-events-none absolute left-0 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
      style="background: radial-gradient(circle, var(--color-brand-50) 0%, transparent 70%);"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">

      <div class="mb-16 text-center" data-animate>
        <div class="eyebrow mb-5 justify-center">Контакты</div>
        <h2 class="section-title mb-5">
          Свяжитесь<br />
          <em class="font-display italic font-400" style="color: var(--color-brand-600);">с нами сегодня</em>
        </h2>
        <p class="section-subtitle mx-auto max-w-xl">
          Позвоните или заполните форму — мы ответим как можно скорее
          и поможем подобрать лучший вариант для ваших близких.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">

        <div data-animate>
          <div class="mb-8 overflow-hidden rounded-3xl shadow-lift ring-1 ring-ink-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.541181548874!2d71.42291657698297!3d51.172247635131455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580d55804208f%3A0x8eeb11fd4356cb6!2z0L_RgNC-0YHQvy4g0KDQtdGB0L_Rg9Cx0LvQuNC60LgsIDAyMDAwMCDQkNGB0YLQsNC90LAsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2spl!4v1773859914767!5m2!1sru!2spl"
              width="100%"
              height="260"
              style="border: 0; filter: sepia(0.12) contrast(1.05);"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Расположение пансионата Доброе сердце"
            />
          </div>

          <div class="space-y-4">
            <a
              href="https://maps.app.goo.gl/RrKjbFp21wWgB1MM9"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-start gap-4 rounded-2xl border border-ivory-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-card"
            >
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-brand-600"
                style="background: var(--color-brand-100);"
              >
                <svg
                  class="h-5 w-5 transition-colors duration-300 group-hover:text-white"
                  style="color: var(--color-brand-600);"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
              </div>
              <div>
                <div class="font-body text-xs font-600 uppercase tracking-wider text-ink-400">Адрес</div>
                <div class="mt-0.5 font-body text-base font-500 text-ink-900">
                  Казахстан, г. Астана
                </div>
                <div class="font-body text-sm text-ink-500">
                  просп. Республики
                </div>
              </div>
              <svg class="ml-auto mt-1 h-4 w-4 flex-shrink-0 text-ink-300 transition-colors duration-200 group-hover:text-brand-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
              </svg>
            </a>

            <a
              href="tel:+380961462910"
              class="group flex items-start gap-4 rounded-2xl border border-ivory-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-card"
            >
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-brand-600"
                style="background: var(--color-brand-100);"
              >
                <svg
                  class="h-5 w-5 transition-colors duration-300 group-hover:text-white"
                  style="color: var(--color-brand-600);"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <div>
                <div class="font-body text-xs font-600 uppercase tracking-wider text-ink-400">Телефон</div>
                <div
                  class="mt-0.5 font-display text-xl font-600"
                  style="color: var(--color-brand-600);"
                >
                  +38 096 146 29 10
                </div>
                <div class="font-body text-xs text-ink-400">Круглосуточно, без выходных</div>
              </div>
            </a>

            <div class="flex items-start gap-4 rounded-2xl border border-ivory-200 bg-white p-5">
              <div
                class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                style="background: var(--color-brand-100);"
              >
                <svg
                  class="h-5 w-5"
                  style="color: var(--color-brand-600);"
                  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div class="font-body text-xs font-600 uppercase tracking-wider text-ink-400">Часы работы</div>
                <div class="mt-0.5 font-body text-base font-500 text-ink-900">Ежедневно, 24 / 7</div>
                <div class="font-body text-xs text-ink-400">Круглосуточный режим работы</div>
              </div>
            </div>
          </div>
        </div>

        <div data-animate class="delay-200">
          <div class="rounded-3xl bg-white p-8">
            <div class="mb-7 flex items-center gap-4 border-b border-ivory-200 pb-6">
              <img
                src="../assets/logo.png"
                alt="Доброе сердце"
                class="h-11 w-11"
              />
              <div>
                <h3 class="font-display text-2xl font-600 text-ink-900">Напишите нам</h3>
                <p class="font-body text-xs text-ink-400">
                  Ответим в течение нескольких часов
                </p>
              </div>
            </div>

            <Transition
              enter-active-class="transition duration-400 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
            >
              <div
                v-if="isSubmitted"
                class="flex flex-col items-center rounded-2xl p-10 text-center"
                style="background: linear-gradient(135deg, var(--color-sage-50), var(--color-sage-100));"
              >
                <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style="background: var(--color-sage-100);">
                  <svg class="h-8 w-8" style="color: #4e8060;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 class="font-display text-2xl font-600 text-ink-900">Спасибо!</h4>
                <p class="mt-2 font-body text-sm text-ink-500">
                  Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
                </p>
                <button class="btn-outline mt-6" @click="isSubmitted = false">
                  Отправить ещё одно
                </button>
              </div>

              <form v-else novalidate class="space-y-[1.6rem]" @submit.prevent="handleSubmit">
                <div>
                  <label for="name" class="mb-2 block font-body text-xs font-600 uppercase tracking-wider text-ink-500">
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    placeholder="Иван Иванович"
                    required
                    class="form-input"
                  />
                </div>
                <div>
                  <label for="phone" class="mb-2 block font-body text-xs font-600 uppercase tracking-wider text-ink-500">
                    Номер телефона *
                  </label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+7 ___ ___ ____"
                    required
                    class="form-input"
                  />
                </div>
                <div>
                  <label for="message" class="mb-2 block font-body text-xs font-600 uppercase tracking-wider text-ink-500">
                    Ваш вопрос или пожелание
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="4"
                    placeholder="Расскажите о своих потребностях..."
                    class="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary w-full justify-center"
                >
                  <svg
                    v-if="isSubmitting"
                    class="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {{ isSubmitting ? 'Отправляем...' : 'Отправить сообщение' }}
                </button>

                <p class="text-center font-body text-xs text-ink-400">
                  Или позвоните:
                  <a href="tel:+380961462910" style="color: var(--color-brand-600);" class="hover:underline font-500">+38 096 146 29 10</a>
                </p>
              </form>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>