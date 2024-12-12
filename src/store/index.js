// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isLoggedIn: false,
    username: '',
    password: '',
  },
  mutations: {
    login(state, userData) {
      state.isLoggedIn = true;
      state.username = userData.username || '';
      state.password = userData.password || '';
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = '';
      state.password = '';
    },
  },
  actions: {
    login({ commit }, userData) {
      commit('login', userData);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
});
