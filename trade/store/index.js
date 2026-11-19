import { accessToken } from '@/middleware/token';
import { combineFaq } from '@/helpers';
// https://nuxtjs.org/docs/directory-structure/store/
export const state = () => ({
  globalLoading: true,
  token: '',
  username: '',
  coins: [],
});

export const getters = {
  username(state) {
    return state.username;
  },
  user(state) {
    return state.user;
  },
  token(state) {
    return state.token;
  },
  globalLoading(state) {
    return state.globalLoading;
  },
  coins(state) {
    return state.coins;
  },
};

export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_COINS(state, coins) {
    state.coins = coins;
  },
  SET_GLOBAL_LOADING(state, globalLoading) {
    state.globalLoading = globalLoading;
  },
};

export const actions = {
  setUsername({ commit }, username) {
    commit('SET_USERNAME', username);
  },
  setToken({ commit }, token) {
    localStorage.setItem(accessToken, token);
    this.$http.setHeader('Authorization', `Bearer ${token}`);
    commit('SET_TOKEN', token);
  },
  setGlobalLoading({ commit }, globalLoading) {
    commit('SET_GLOBAL_LOADING', globalLoading);
  },
  logout({ commit }) {
    this.$http
      .get('/api/auth/logout')
      .then(() => {
        this.$router.replace({ path: '/login' }).catch(() => {});
      })
      .finally(() => {
        commit('SET_TOKEN', '');
        localStorage.clear();
      });
  },
  getUserInfo({ commit }) {
    return this.$http.get('/api/users/auth/info').then(async res => {
      const body = await res.json();
      commit('user/SET_USER', body);
      commit('settings/SET_SETTINGS', body.settings);
      const { withdraw, deposit, support } = combineFaq(body.faq);
      commit('settings/SET_FAQ_WITHDRAW', withdraw);
      commit('settings/SET_FAQ_DEPOSIT', deposit);
      commit('settings/SET_FAQ_SUPPORT', support);
    });
  },
  getUserInfoLight({ commit }) {
    return this.$http.get('/api/users/auth/info').then(async res => {
      const body = await res.json();
      commit('user/SET_USER', body);
      commit('settings/SET_SETTINGS', body.settings);
    });
  },
  getCoins({ commit }) {
    return this.$http.get('/api/withdraw/coins').then(async res => {
      const body = await res.json();
      commit('SET_COINS', body);
    });
  },
};
