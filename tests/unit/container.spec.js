import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Container from '@/components/Container.vue'
import WeatherCard from '@/components/WeatherCard.vue'

describe('Container.vue', () => {
  const component = shallowMount(Container);
  it('renders WeatherCard component', () => {
    expect(component.findComponent(WeatherCard).exists()).to.be.true;
  })
  it('renders welcome message correctly', () => {
    expect(component.find('.font-extrabold').text()).to.be.eql('Welcome to Weather App.');
  })
})
