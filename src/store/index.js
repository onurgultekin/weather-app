import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'https://weather-api-for-weather-app.herokuapp.com/api/';

export default createStore({
  state: {
    cities: null,
    weatherInfo: null,
    error: null
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities;
    },
    setWeatherInfo(state, info) {
      state.weatherInfo = info;
    },
    setErrorMessage(state, message) {
      state.error = message;
    }
  },
  actions: {
    getCities({ commit }) {
      commit('setErrorMessage', null);
      axios.get('cities')
        .then(response => {
          commit('setCities', response.data);
        }).catch(err => {
          if (err.response.status === 404) {
            commit('setErrorMessage', 'URL you are looking for is not found.');
          } else if (err.response.status === 500) {
            commit('setErrorMessage', 'It is not you, it is us. Please try again later');
          } else {
            commit('setErrorMessage', 'Something went wrong. Please try again later');
          }
        });
    },
    getWeatherInfo({ commit }, city) {
      commit('setErrorMessage', null);
      axios.get('weather/' + city)
        .then(response => {
          if (response.data.cod === 200) {
            commit('setWeatherInfo', response.data);
          } else if (response.data.cod === '404') {
            commit('setErrorMessage', 'City you are looking for is not found.');
          }
        }).catch(err => {
          if (err.response.status === 404) {
            commit('setErrorMessage', 'City you are looking for is not found.');
          } else if (err.response.status === 500) {
            commit('setErrorMessage', 'It is not you, it is us. Please try again later');
          } else {
            commit('setErrorMessage', 'Something went wrong. Please try again later');
          }
        });
    }
  },
  modules: {
  }
})
