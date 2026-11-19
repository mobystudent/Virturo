export const state = () => ({
  id: 0,
  kyc: 'NO',
  fullName: '',
  login: '',
  phone: '',
  email: '',
  birthDate: '',
  location: {},
  loginList: [],
  referrersCount: 0,
  twoFa: false,
  currency: '',
  freezedWithdraw: 0,
  balance: 0,
  selectedCoin: {},
  selectedNetwork: {},
  lastWithdraws: [],
  lastDeposits: [],
  accountType: '',
  wallets: {},
  demo: null,
});

export const getters = {
  kyc(state) {
    return state.kyc;
  },
  fullName(state) {
    return state.fullName;
  },
  phone(state) {
    return state.phone;
  },
  email(state) {
    return state.email;
  },
  birthDate(state) {
    return state.birthDate;
  },
  location(state) {
    return state.location;
  },
  loginList(state) {
    return state.loginList;
  },
  twoFa(state) {
    return state.twoFa;
  },
  login(state) {
    return state.login;
  },
  referrersCount(state) {
    return state.referrersCount;
  },
  currency(state) {
    return state.currency;
  },
  freezedWithdraw(state) {
    return state.freezedWithdraw;
  },
  balance(state) {
    return state.balance;
  },
  availableBalance(state) {
    return (state.balance - state.freezedWithdraw).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  },
  selectedCoin(state) {
    return state.selectedCoin;
  },
  selectedNetwork(state) {
    return state.selectedNetwork;
  },
  lastWithdraws(state) {
    return state.lastWithdraws;
  },
  lastDeposits(state) {
    return state.lastDeposits;
  },
  accountType(state) {
    return state.accountType;
  },
  wallets(state) {
    return state.wallets;
  },
  demo(state) {
    return state.demo;
  },
};

export const mutations = {
  SET_USER(state, user) {
    state.kyc = user.kyc;
    state.id = user.id;
    state.fullName = user.fullName;
    state.login = user.login;
    state.phone = user.phone;
    state.email = user.email;
    state.birthDate = user.birthDate;
    state.location = user.location;
    state.loginList = user.user_logs_last;
    state.twoFa = user.two_fa;
    state.referrersCount = user.referrers_count;
    state.currency = user.currency;
    state.freezedWithdraw = user.freezed_withdraw;
    state.demo = user.demo;
    if (user.metrics && user.metrics.available_balance) {
      state.balance = user.metrics.available_balance || 0;
    } else {
      state.balance = 0;
    }
    state.accountType = user.account_type;
    state.wallets = user.publicwallets.reduce((a, v) => ({ ...a, [v.coin_id]: v.address }), {});
  },
  SET_KYC(state, kyc) {
    state.kyc = kyc;
  },
  SET_TWO_FA(state, twoFa) {
    state.twoFa = twoFa;
  },
  SET_SELECTED_COIN(state, coin) {
    state.selectedCoin = coin;
  },
  SET_SELECTED_NETWORK(state, network) {
    state.selectedNetwork = network;
  },
  SET_LAST_WITHDRAWS(state, lastWithdraws) {
    state.lastWithdraws = lastWithdraws;
  },
  SET_LAST_DEPOSITS(state, lastDeposits) {
    state.lastDeposits = lastDeposits;
  },
  SET_WITHDRAWBY_STATUS_BY_ID(state, { status, id }) {
    const index = state.lastWithdraws.findIndex(el => el.id === id);
    if (index > -1) {
      const newList = [...state.lastWithdraws];
      newList[index].status = status;
      state.lastWithdraws = newList;
    }
  },
  SET_BALANCE(state, balance) {
    state.balance = isNaN(+balance) || !balance ? 0 : balance;
  },
  SET_FREEZED_WITHDRAW(state, freezedWithdraw) {
    state.freezedWithdraw = freezedWithdraw;
  },
};

export const actions = {
  setKyc({ commit }, kyc) {
    commit('SET_KYC', kyc);
  },
  setTwoFa({ commit }, twoFa) {
    commit('SET_TWO_FA', twoFa);
  },
  cancelWithdraw({ commit }, { id, status }) {
    this.$http.put(`/api/withdraw/${id}`, { status }).then(() => {
      commit('SET_WITHDRAWBY_STATUS_BY_ID', { id, status });
    });
  },
  setSelectedCoin({ commit }, coin) {
    commit('SET_SELECTED_COIN', coin);
    const network = coin.networks.length > 0 ? coin.networks[0] : {};
    commit('SET_SELECTED_NETWORK', network);
  },
  setSelectedNetwork({ commit }, network) {
    commit('SET_SELECTED_NETWORK', network);
  },
  setBalance({ commit }, balance) {
    commit('SET_BALANCE', balance);
  },
  setFreezedWithdraw({ commit }, freezedWithdraw) {
    commit('SET_FREEZED_WITHDRAW', freezedWithdraw);
  },
  getLastWithdraws({ commit }, sortOptions = {}) {
    const { sortBy, sortOrder } = sortOptions;
    this.$http.get(`/api/withdraw/recent-withdraws?${sortBy}=${sortOrder}`).then(async res => {
      const body = await res.json();
      commit('SET_LAST_WITHDRAWS', body);
    });
  },
  getLastDeposits({ commit }, sortOptions = {}) {
    const { sortBy, sortOrder } = sortOptions;
    this.$http.get(`/api/deposit/recent-deposits?${sortBy}=${sortOrder}`).then(async res => {
      const body = await res.json();
      commit('SET_LAST_DEPOSITS', body);
    });
  },
};
