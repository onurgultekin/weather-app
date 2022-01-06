import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Info from '@/components/Info.vue'

describe('Info.vue', () => {
  it('renders props(text, value, unit) when passed', () => {
    const text = 'Something'
    const value = 123
    const unit = 'something else'
    const wrapper = shallowMount(Info, {
      props: { text, value, unit }
    })
    expect(wrapper.find('.font-medium').text()).to.be.eql(text);
    expect(wrapper.find('.text-gray-500').text()).to.be.eql(value + ' ' + unit);
  })
})
