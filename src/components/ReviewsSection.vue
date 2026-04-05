<script setup lang="ts">
const reviewsHref = 'https://2gis.kz/astana/firm/70000001059285683/tab/reviews'

const reviewCards = [
  {
    name: '2ГИС',
    rating: '5.0',
    logo: 'https://optim.tildacdn.pro/tild6337-6535-4561-a332-393266656637/-/format/webp/cdae02c9-1322-4ef9-8.webp',
    logoAlt: '2GIS',
    background: '#F9BD15',
    fullStars: true,
  },
  {
    name: 'GOOGLE',
    rating: '4.9',
    logo: 'https://optim.tildacdn.pro/tild6139-6439-4865-a466-336262633664/-/format/webp/2702604.png.webp',
    logoAlt: 'Google',
    background: '#0063B5',
    fullStars: false,
  },
]

const starsImage = 'https://static.tildacdn.pro/tild3839-3763-4131-b439-323839373861/svgexport-20.svg'
</script>

<template>
  <section id="reviews" class="reviews-strip">
    <div class="reviews-strip__container">
      <div class="reviews-strip__layout" data-animate>
        <div class="reviews-strip__cards">
          <a
            v-for="card in reviewCards"
            :key="card.name"
            :href="reviewsHref"
            target="_blank"
            rel="noopener noreferrer"
            class="reviews-card"
            :aria-label="`Открыть отзывы ${card.name}`"
            :style="{ background: card.background }"
          >
            <div class="reviews-card__logo-wrap">
              <img :src="card.logo" :alt="card.logoAlt" class="reviews-card__logo" loading="lazy" decoding="async">
            </div>

            <div class="reviews-card__meta">
              <div class="reviews-card__name">{{ card.name }}</div>
              <div class="reviews-card__score-row">
                <div class="reviews-card__rating">{{ card.rating }}</div>
                <div v-if="card.fullStars" class="reviews-card__stars reviews-card__stars--full" aria-label="5 stars">
                  <svg
                    v-for="star in 5"
                    :key="`${card.name}-${star}`"
                    class="reviews-card__star"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                </div>
                <img v-else :src="starsImage" alt="5 stars" class="reviews-card__stars" loading="lazy" decoding="async">
              </div>
            </div>
          </a>
        </div>

        <a
          :href="reviewsHref"
          target="_blank"
          rel="noopener noreferrer"
          class="reviews-button"
        >
          Открыть больше отзывов
        </a>

      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-strip {
  padding: 0 0 5rem;
}

.reviews-strip__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

.reviews-strip__layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
  row-gap: 0.85rem;
  min-height: 90px;
}

.reviews-strip__cards {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reviews-card {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  width: 172px;
  min-height: 68px;
  padding: 0.75rem 0.9rem;
  border-radius: 16px;
  text-decoration: none;
  color: #ffffff;
  transition: transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease;
}

.reviews-card:hover {
  transform: translateY(-2px);
  filter: brightness(1.04);
}

.reviews-card__logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

.reviews-card__logo {
  max-width: 24px;
  max-height: 24px;
  object-fit: contain;
}

.reviews-card__rating {
  font-family: var(--font-family-display, serif);
  font-size: 1.45rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0;
  color: inherit;
}

.reviews-card__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.28rem;
}

.reviews-card__score-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.reviews-card__name {
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: 0.58rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.82);
}

.reviews-card__stars {
  width: 53px;
  height: 10px;
  object-fit: contain;
}

.reviews-card__stars--full {
  display: flex;
  align-items: center;
  gap: 1px;
  width: auto;
  height: auto;
  color: #ffffff;
}

.reviews-card__star {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

.reviews-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  min-height: 60px;
  justify-self: stretch;
  padding: 0 1.75rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--color-sapphire-700), var(--color-sapphire-800));
  box-shadow: 0 18px 38px rgba(0, 99, 181, 0.22);
  color: white;
  font-family: var(--font-family-body, system-ui, sans-serif);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.reviews-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 42px rgba(0, 99, 181, 0.28);
}

@media (max-width: 959px) {
  .reviews-strip__layout {
    justify-content: center;
    column-gap: 0.85rem;
  }

  .reviews-strip__cards {
    gap: 0.75rem;
  }

  .reviews-button {
    display: none;
  }
}

@media (max-width: 480px) {
  .reviews-strip {
    padding-bottom: 4rem;
  }

  .reviews-strip__container {
    padding: 0 1rem;
  }

  .reviews-strip__layout {
    justify-content: center;
    min-height: auto;
  }

  .reviews-strip__cards {
    width: 100%;
    gap: 0.5rem;
  }

  .reviews-card {
    width: calc(50% - 0.25rem);
    min-width: 0;
    min-height: 64px;
    padding: 0.65rem 0.7rem;
    gap: 0.55rem;
  }

  .reviews-card__rating {
    font-size: 1.25rem;
  }

  .reviews-button {
    display: none;
  }
}
</style>