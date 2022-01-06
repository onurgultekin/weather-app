import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/Alert.vue'

describe('Alert.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(Alert, {
      props: { message }
    })
    expect(wrapper.text()).to.include(message)
  })
})
