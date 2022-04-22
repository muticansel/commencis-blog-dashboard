import { beforeAll, describe, expect, it } from 'vitest'
import { config, mount } from '@vue/test-utils'
import BlogListDropdown from '../../BlogList/BlogListDropdown.vue'
import { i18nTest } from '../i18nForTest'

describe('BlogListDropdown', () => {
  beforeAll(() => {
    config.global.plugins = [i18nTest]
  })
  it('renders properly when showDropdown is true', () => {
    const wrapper = mount(BlogListDropdown, {
      props: { title: 'Javascript is great', showDropdown: true },
      shallow: true,
    })
    const titleElement = wrapper.get(' button .title-short')

    expect(wrapper.findAll('button .title-short')).toHaveLength(1)
    expect(titleElement.text()).toContain('Javascript is great')
  })
  it('doesnt render title properly when showDropdown is false', () => {
    const wrapper = mount(BlogListDropdown, {
      props: { title: 'Javascript is great', showDropdown: false },
      shallow: true,
    })

    expect(wrapper.findAll('button .title-short')).toHaveLength(0)
  })
  it('triggers contextClick event', () => {
    const wrapper = mount(BlogListDropdown, {
      props: { title: 'Javascript is great', showDropdown: true },
      shallow: true,
    })

    wrapper.findAll('button')[2].trigger('click')
    expect(wrapper.emitted('contextClick')).toHaveLength(1)

    wrapper.findAll('button')[3].trigger('click')

    expect(wrapper.emitted('contextClick')).toHaveLength(2)
    /* TODO: fix lint error */
    expect(wrapper.emitted('contextClick')[0]).toEqual(['copy'])
    expect(wrapper.emitted('contextClick')[1]).toEqual(['star'])
  })
})
