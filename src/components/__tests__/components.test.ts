import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'
import ServicesSection from '@/components/ServicesSection.vue'

describe('AppFooter', () => {
  it('renders the brand name', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.text()).toContain('Добре серце')
  })

  it('renders phone number link', () => {
    const wrapper = mount(AppFooter)
    const phoneLink = wrapper.find('a[href="tel:+380961462910"]')
    expect(phoneLink.exists()).toBe(true)
  })

  it('renders current year in copyright', () => {
    const wrapper = mount(AppFooter)
    const year = new Date().getFullYear().toString()
    expect(wrapper.text()).toContain(year)
  })

  it('renders the address', () => {
    const wrapper = mount(AppFooter)
    expect(wrapper.text()).toContain('Вінниця')
  })
})

describe('ServicesSection', () => {
  it('renders all 8 service cards', () => {
    const wrapper = mount(ServicesSection)
    // Should have service items rendered
    expect(wrapper.text()).toContain('Медичний нагляд')
    expect(wrapper.text()).toContain('Цілодобова медсестра')
    expect(wrapper.text()).toContain('Збалансоване харчування')
  })

  it('renders section title', () => {
    const wrapper = mount(ServicesSection)
    expect(wrapper.text()).toContain('Комплексний догляд')
  })
})