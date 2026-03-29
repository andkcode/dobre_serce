import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  const observeElements = (selector: string = '[data-animate]') => {
    const elements = document.querySelectorAll<HTMLElement>(selector)

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('animate-fade-up')
            el.style.opacity = '1'
            observer.value?.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach((el) => {
      el.style.opacity = '0'
      observer.value?.observe(el)
    })
  }

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observeElements }
}

export function useActiveSection() {
  const activeSection = ref<string>('')
  let sectionNodes: HTMLElement[] = []
  let rafId = 0

  const updateSections = () => {
    sectionNodes = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
  }

  const handleScroll = () => {
    const scrollY = window.scrollY + 100

    for (const section of sectionNodes) {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (scrollY >= top && scrollY < top + height) {
        activeSection.value = section.id
        break
      }
    }
  }

  const onScroll = () => {
    if (rafId !== 0) return
    rafId = window.requestAnimationFrame(() => {
      rafId = 0
      handleScroll()
    })
  }

  onMounted(() => {
    updateSections()
    window.addEventListener('resize', updateSections, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSections)
    window.removeEventListener('scroll', onScroll)
    if (rafId !== 0) {
      window.cancelAnimationFrame(rafId)
    }
  })

  return { activeSection }
}

export function useScrolled(threshold = 80) {
  const isScrolled = ref(false)
  let rafId = 0

  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold
  }

  const onScroll = () => {
    if (rafId !== 0) return
    rafId = window.requestAnimationFrame(() => {
      rafId = 0
      handleScroll()
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    if (rafId !== 0) {
      window.cancelAnimationFrame(rafId)
    }
  })

  return { isScrolled }
}