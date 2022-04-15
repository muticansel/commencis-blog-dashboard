import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import BlogListDropdown from '../../BlogList/BlogListDropdown.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(BlogListDropdown, {
      global: {
        stubs: { BaseDivider: true },
      },
      props: { title: 'Javascript is great' },
    })
    expect(wrapper.text()).toContain('Javascript is great')
  })
})
