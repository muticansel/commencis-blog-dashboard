import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import BlogTag from '../../BlogList/BlogTag.vue'

describe('BlogTag', () => {
  it('renders properly', () => {
    const wrapper = mount(BlogTag, { props: { text: 'Javascript is great' } })
    expect(wrapper.text()).toContain('Javascript is great')
  })
})
