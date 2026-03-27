<!--
  NavHeader.vue — COLORS ONLY CHANGED
  Changes:
    • #00c4b4 teal nav underline/hover → var(--color-brand-500) gold
    • #DAA532 logo label/streak → var(--color-brand-500) unified gold
    • rgba(0,196,180,...) CTA teal fills → var(--color-sapphire-700) based
    • rgba(0,137,123,...) dark teal hover → var(--color-sapphire-800)
    • CTA shimmer: gold rgba(249,189,21,...) instead of white
    • Streak gradient: sapphire-600 → brand-500 gold
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useScrolled } from '@/composables/useScroll'

const { isScrolled } = useScrolled()
const isMobileMenuOpen = ref(false)
const activeItem = ref<string | null>(null)

const navItems = [
  { label: 'О нас',       href: '#about' },
  { label: 'Услуги',      href: '#services' },
  { label: 'Проживание',  href: '#accommodation' },
  { label: 'Документы',   href: '#documents' },
  { label: 'Цена',        href: '#price' },
  { label: 'Контакты',    href: '#contacts' },
]

function scrollToSection(href: string) {
  activeItem.value = href
  isMobileMenuOpen.value = false
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    class="ds-header"
    :class="{ 'ds-header--scrolled': isScrolled }"
    role="banner"
  >

    <div class="ds-header__bg" aria-hidden="true" />

    <nav class="ds-header__nav" aria-label="Главная навигация">

      <div class="ds-logo__img-wrap" style="position: relative; display: inline-block;">
        <div style="
          position: absolute;
          top: -5px;
          left: 38%;
          transform: translateX(-50%);
          font-family: var(--font-family-body, system-ui, sans-serif);
          font-size: 0.70rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-brand-500);
          white-space: nowrap;
          pointer-events: none;
        ">Астана</div>
        <img
          src="../assets/dobroe_serdce.png"
          alt="Логотип Доброе сердце"
          class="ds-logo__img"
        />
      </div>

      <ul class="ds-nav__list" role="list">
        <li v-for="item in navItems" :key="item.href" class="ds-nav__item">
          <button
            class="ds-nav__link"
            :class="{ 'ds-nav__link--active': activeItem === item.href }"
            @click="scrollToSection(item.href)"
          >
            {{ item.label }}
            <span class="ds-nav__underline" aria-hidden="true" />
          </button>
        </li>
      </ul>

      <div class="flex gap-6">
        <div class="hidden lg:flex items-center gap-4">
          <a
            href="https://instagram.com/pansionat_dobroe_serdce"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="group relative flex items-center justify-center rounded-full backdrop-blur-sm  transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <Icon icon="skill-icons:instagram" class="relative z-10 w-[30px] h-[30px] text-white/70 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
          </a>
          <a
            href="https://wa.me/380961462910"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            class="group relative flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <Icon icon="logos:whatsapp-icon" class="relative z-10 w-[30px] h-[30px] text-white/70 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
          </a>
        </div>

        <a href="tel:+380961462910" class="ds-cta" aria-label="Позвонить">
          <span class="ds-cta__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </span>
          <span class="ds-cta__label">+38 096 146 29 10</span>
          <span class="ds-cta__shimmer" aria-hidden="true" />
        </a>
      </div>

      <button
        class="ds-burger"
        :class="{ 'ds-burger--open': isMobileMenuOpen }"
        aria-label="Открыть меню"
        :aria-expanded="isMobileMenuOpen"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="ds-burger__bar ds-burger__bar--top" />
        <span class="ds-burger__bar ds-burger__bar--mid" />
        <span class="ds-burger__bar ds-burger__bar--bot" />
      </button>
    </nav>

    <Transition name="ds-drawer">
      <div
        v-if="isMobileMenuOpen"
        class="ds-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
      >
        <div class="ds-drawer__sep" aria-hidden="true" />
        <ul class="ds-drawer__list" role="list">
          <li
            v-for="(item, i) in navItems"
            :key="item.href"
            class="ds-drawer__item"
            :style="`--i: ${i}`"
          >
            <button class="ds-drawer__link" @click="scrollToSection(item.href)">
              <span class="ds-drawer__dot" aria-hidden="true" />
              {{ item.label }}
            </button>
          </li>
        </ul>
        <a href="tel:+380961462910" class="ds-drawer__cta">
          <svg class="ds-drawer__cta-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Позвонить
        </a>
          <div class="flex justify-center items-center gap-6 pt-4">
            <a
              href="https://instagram.com/pansionat_dobroe_serdce"
              target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              class="group relative flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Icon icon="skill-icons:instagram" class="relative z-10 w-[30px] h-[30px] transition-all duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://wa.me/380961462910"
              target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              class="group relative flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <Icon icon="logos:whatsapp-icon" class="relative z-10 w-[30px] h-[30px] transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.ds-header {
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur: 650ms;
  --s: 0;
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
}
.ds-header--scrolled { --s: 1; }

.ds-header__bg {
  position: absolute;
  inset: 0;
  background: rgba(253, 252, 248, var(--s));
  backdrop-filter: blur(calc(var(--s) * 22px));
  -webkit-backdrop-filter: blur(calc(var(--s) * 22px));
  box-shadow:
    0 1px 0 rgba(15,13,11, calc(var(--s) * 0.08)),
    0 4px 48px rgba(15,13,11, calc(var(--s) * 0.06));
  transition:
    background var(--dur) var(--ease),
    backdrop-filter var(--dur) var(--ease),
    -webkit-backdrop-filter var(--dur) var(--ease),
    box-shadow var(--dur) var(--ease);
  pointer-events: none;
}



.ds-header__nav {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
  padding: calc(22px - var(--s) * 12px) 2rem;
  transition: padding var(--dur) var(--ease);
}
@media (min-width: 1024px) {
  .ds-header__nav { padding-left: 2.5rem; padding-right: 2.5rem; }
}

.ds-logo__img-wrap { position: relative; flex-shrink: 0; }
.ds-logo__img { height: 40px; width: auto; object-fit: contain; }

.ds-nav__list {
  display: none;
  align-items: center;
  gap: 1.75rem;
  list-style: none;
  margin: 0; padding: 0;
}
@media (min-width: 1024px) { .ds-nav__list { display: flex; } }

.ds-nav__link {
  position: relative;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.3rem 0;
  /* text: white on dark hero, ink-700 on scrolled ivory */
  color: rgba(
    calc(255 - var(--s) * 187),
    calc(255 - var(--s) * 176),
    calc(255 - var(--s) * 215),
    calc(0.8 + var(--s) * 0.2)
  );
  transition: color var(--dur) var(--ease);
  outline: none;
}
/* hover/active: brand-500 gold (was teal #00c4b4) */
.ds-nav__link:hover,
.ds-nav__link--active { color: var(--color-brand-500); }

/* underline: brand-500 → brand-300 gold gradient (was teal) */
.ds-nav__underline {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--color-brand-500), var(--color-brand-300));
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
}
.ds-nav__link:hover .ds-nav__underline,
.ds-nav__link--active .ds-nav__underline { transform: scaleX(1); }

/* CTA button: sapphire-700 filled when scrolled (was teal) */
.ds-cta {
  display: none;
  align-items: center;
  gap: 0.45rem;
  padding: 0.58rem 1.35rem;
  border-radius: 9999px;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  background: rgba(255,255,255, calc(0.14 - var(--s) * 0.14));
  border: 1px solid rgba(255,255,255, calc(0.28 - var(--s) * 0.28));
  box-shadow:
    inset 0 0 0 9999px rgba(0, 99, 181, var(--s)),
    0 4px 20px rgba(0, 99, 181, calc(var(--s) * 0.22));
  backdrop-filter: blur(calc((1 - var(--s)) * 14px));
  -webkit-backdrop-filter: blur(calc((1 - var(--s)) * 14px));
  transition:
    background  var(--dur) var(--ease),
    border-color var(--dur) var(--ease),
    box-shadow  var(--dur) var(--ease),
    backdrop-filter var(--dur) var(--ease),
    transform   0.22s ease;
}
@media (min-width: 1024px) { .ds-cta { display: flex; } }

.ds-cta:hover {
  transform: translateY(-2px);
  box-shadow:
    inset 0 0 0 9999px rgba(0, 61, 138, calc(var(--s) * 0.9 + 0.1)),
    0 8px 32px rgba(0, 99, 181, calc(0.12 + var(--s) * 0.28));
}
.ds-cta:active { transform: translateY(0); }

.ds-cta__icon { width: 13px; height: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.ds-cta__icon svg { width: 100%; height: 100%; }

/* shimmer: gold rgba (was white) */
.ds-cta__shimmer {
  position: absolute;
  top: 0; bottom: 0;
  left: -80%;
  width: 55%;
  background: linear-gradient(
    105deg, transparent 35%, rgba(249,189,21,0.25) 50%, transparent 65%
  );
  transform: skewX(-20deg);
  pointer-events: none;
  transition: left 0s;
}
.ds-cta:hover .ds-cta__shimmer {
  left: 140%;
  transition: left 0.55s ease;
}

.ds-burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px; height: 36px;
  padding: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}
.ds-burger:hover {
  background: rgba(
    calc(255 - var(--s) * 241),
    calc(255 - var(--s) * 241),
    calc(255 - var(--s) * 241),
    0.08
  );
}
@media (min-width: 1024px) { .ds-burger { display: none; } }

.ds-burger__bar {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: rgb(
    calc(255 - var(--s) * 240),
    calc(255 - var(--s) * 242),
    calc(255 - var(--s) * 244)
  );
  transition:
    background var(--dur) var(--ease),
    transform 0.38s cubic-bezier(0.16,1,0.3,1),
    opacity   0.25s ease,
    width     0.3s  ease;
}
.ds-burger__bar--top { width: 22px; }
.ds-burger__bar--mid { width: 22px; }
.ds-burger__bar--bot { width: 22px; }

.ds-burger--open .ds-burger__bar--top { transform: translateY(6.5px) rotate(45deg); }
.ds-burger--open .ds-burger__bar--mid { opacity: 0; transform: scaleX(0); }
.ds-burger--open .ds-burger__bar--bot { transform: translateY(-6.5px) rotate(-45deg); }

.ds-drawer {
  position: relative;
  z-index: 2;
  padding: 0 1.5rem 1.25rem;
  background: rgba(253,252,248,0.97);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  box-shadow: 0 8px 40px rgba(15,13,11,0.09);
}
@media (min-width: 1024px) { .ds-drawer { display: none; } }

.ds-drawer__sep {
  height: 1px;
  margin: 0 -1.5rem 0.875rem;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(15,13,11,0.06) 20%,
    rgba(15,13,11,0.06) 80%,
    transparent
  );
}

.ds-drawer__list {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ds-drawer__item {
  opacity: 0;
  transform: translateX(-8px);
  animation: drawerIn 0.42s cubic-bezier(0.16,1,0.3,1)
    calc(50ms + var(--i) * 40ms) forwards;
}
@keyframes drawerIn {
  to { opacity: 1; transform: translateX(0); }
}

.ds-drawer__link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 0.65rem 0.875rem;
  border: none;
  background: transparent;
  border-radius: 0.625rem;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-ink-800);
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, color 0.2s, padding-left 0.28s cubic-bezier(0.16,1,0.3,1);
}
/* hover: sapphire-50 bg, sapphire-700 text (was teal) */
.ds-drawer__link:hover {
  background: var(--color-sapphire-50);
  color: var(--color-sapphire-700);
  padding-left: 1.125rem;
}

/* dot: brand-500 gold (was teal) */
.ds-drawer__dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: var(--color-brand-500);
  flex-shrink: 0;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.2s, transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
}
.ds-drawer__link:hover .ds-drawer__dot {
  opacity: 1;
  transform: scale(1);
}

/* drawer CTA: sapphire-700 → sapphire-800 (was teal) */
.ds-drawer__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.875rem;
  padding: 0.85rem 1.5rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, var(--color-sapphire-700), var(--color-sapphire-800));
  color: white;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 99, 181, 0.28);
  transition: transform 0.22s, box-shadow 0.22s;
  opacity: 0;
  animation: drawerIn 0.42s cubic-bezier(0.16,1,0.3,1) calc(50ms + 6 * 40ms) forwards;
}
.ds-drawer__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 99, 181, 0.38);
}
.ds-drawer__cta-icon { width: 15px; height: 15px; flex-shrink: 0; }

.ds-drawer-enter-active {
  transition: opacity 0.32s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1);
}
.ds-drawer-leave-active {
  transition: opacity 0.22s ease, transform 0.28s ease;
}
.ds-drawer-enter-from,
.ds-drawer-leave-to  { opacity: 0; transform: translateY(-8px); }
.ds-drawer-enter-to,
.ds-drawer-leave-from{ opacity: 1; transform: translateY(0); }
</style>