import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://weather-api-for-weather-app.herokuapp.com/api/';

export default createStore({
  state: {
    cities: null,
    weatherInfo: null
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
    setWeatherInfo(state, info) {
      state.weatherInfo = info;
    }
  },
  actions: {
    getCities({ commit }) {
      axios.get('cities')
        .then(response => {
          commit('setCities', response.data);
        })
    },
    getWeatherInfo({ commit }, city) {
      axios.get('weather/' + city)
        .then(response => {
          commit('setWeatherInfo', response.data);
        })
    }
  },
  modules: {
  }
})
