export const state = () => ({
  exchageRates: {},
  converted: 0,
});

export const getters = {
  exchageRates(state) {
    return state.exchageRates;
  },
  converted(state) {
    return state.converted.toFixed(6);
  },
};

export const mutations = {
  SET_EXCHANGE_RATES(state, exchageRates) {
    state.exchageRates = exchageRates;
  },
  SET_CONVERTED(state, converted) {
    state.converted = converted;
  },
  CLEAR_CONVERTED(state) {
    state.converted = 0;
  },
};

export const actions = {
  getExchangeRates({ commit }) {
    return this.$http.get('/api/auth/exchange-rates').then(async res => {
      const body = await res.json();
      const rates = {};
      body.forEach(el => {
        if (!rates[el.currency]) rates[el.currency] = [];
        rates[el.currency].push(el);
      });
      commit('SET_EXCHANGE_RATES', rates);
    });
  },
  convert({ commit, state, rootState }, cur) {
    const { balance, currency, freezedWithdraw } = rootState.user;
    const amount = balance - freezedWithdraw;
    if (amount > 0 && state.exchageRates[currency.toUpperCase()]) {
      const rate = state.exchageRates[currency.toUpperCase()].find(el => el.crypto_currency === cur.toUpperCase());
      if (rate) {
        const exchange = amount * rate.buy;
        commit('SET_CONVERTED', exchange || 0);
        return;
      }
    }
    commit('CLEAR_CONVERTED');
  },
  clearConverted({ commit }) {
    commit('CLEAR_CONVERTED');
  },
};
