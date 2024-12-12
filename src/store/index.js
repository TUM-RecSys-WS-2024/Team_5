// store/index.js
import { createStore } from 'vuex';

function loadState () {
  let userJSON = window.sessionStorage.getItem('_systemcode_user') || '{}';
  return JSON.parse(userJSON);
}
function saveState (data) {
  let userJSON = JSON.stringify(data);
  window.sessionStorage.setItem('_systemcode_user', userJSON);
}


const store = createStore({
  state () {
    return {
      isLoggedIn: false,
      username: '',
      password: '',
    }
  },
  mutations: {
    login(state, userData) {
      state.isLoggedIn = true;
      state.username = userData.username || '';
      state.password = userData.password || '';
      saveState(state);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = '';
      state.password = '';
      saveState(state);
    },
  },
  actions: {
    login({ commit }, userData) {
      setTimeout(() => {
        commit('login', userData);
      }, 1000);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    username: state => state.username,
    password: state => state.password
  }
});

export default store;
