<script setup lang="ts">
import { ref, onMounted } from "vue"
import logo from "../assets/logo.png"

const progress = ref(0)

function simulateProgress() {
  const interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 8
    }
  }, 120)

  return interval
}

onMounted(() => {
  const interval = simulateProgress()

  window.addEventListener("load", () => {
    progress.value = 100
    setTimeout(() => {
      clearInterval(interval)
    }, 300)
  })
})
</script>

<template>
  <div class="loader">

    <!-- subtle background particles -->
    <div class="loader-bg"></div>

    <div class="loader-content">

      <div class="logo-wrapper">
        <img
          :src="logo"
          class="logo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.loader {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    135deg,
    var(--color-ivory-50) 0%,
    var(--color-brand-50) 100%
  );

  overflow: hidden;
}

/* subtle floating gradient */
.loader-bg {
  position: absolute;
  inset: -20%;
  z-index: 0;

  background: radial-gradient(
      circle at 30% 40%,
      rgba(201,169,78,0.18),
      transparent 60%
    ),
    radial-gradient(
      circle at 70% 60%,
      rgba(204,82,64,0.15),
      transparent 60%
    );

  filter: blur(60px);

  animation: drift 14s ease-in-out infinite;
}

.loader-content {
  position: relative;
  z-index: 2;
  text-align: center;
  animation: fadeUp .8s ease;
}

.logo-wrapper {
  margin-bottom: 20px;
  position: relative;
}

.logo {
  width: 72px;
  animation: heartbeat 2.4s ease-in-out infinite;
}

/* elegant title */

.title {
  font-family: var(--font-family-display);
  font-size: 2rem;
  color: var(--color-brand-700);
  letter-spacing: .02em;
}

.subtitle {
  margin-top: 6px;
  font-size: .9rem;
  color: var(--color-ink-500);
}

.progress-wrapper {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.progress-track {
  width: 220px;
  height: 6px;
  background: var(--color-ivory-200);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  width: 0%;

  background:
    linear-gradient(
      90deg,
      var(--color-brand-600),
      var(--color-gold-400)
    );

  transition: width .35s ease;
}

.percent {
  font-size: .8rem;
  color: var(--color-ink-400);
}

</style>