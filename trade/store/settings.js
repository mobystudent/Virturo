export const state = () => ({
  twofa: false,
  bannertargetblank: false,
  mainbanner: '',
  bannerlink: '',
  faqdeposit: [],
  faqwithdraw: [],
  faqsupport: [],
  endeposit: [],
  enwithdraw: [],
  kycvalue: 0,
  sidebar: {
    opened: false,
  },
  device: 'desktop',
});

export const getters = {
  bannertargetblank(state) {
    return state.bannertargetblank;
  },
  twofa(state) {
    return state.twofa;
  },
  bannerlink(state) {
    return state.bannerlink;
  },
  mainbanner(state) {
    return state.mainbanner;
  },
  faqdeposit(state) {
    return state.faqdeposit;
  },
  faqwithdraw(state) {
    return state.faqwithdraw;
  },
  faqsupport(state) {
    return state.faqsupport;
  },
  endeposit(state) {
    return state.endeposit;
  },
  enwithdraw(state) {
    return state.enwithdraw;
  },
  kycvalue(state) {
    return state.kycvalue;
  },
  sidebar(state) {
    return state.sidebar.opened;
  },
  device(state) {
    return state.device;
  },
};

export const mutations = {
  SET_SETTINGS(state, settings) {
    settings.forEach(el => {
      switch (el.key) {
        case 'enwithdraw':
        case 'endeposit':
          state[el.key] =
            el.params
              ?.split(',')
              .filter(ele => ele.length)
              .map(ele => +ele) || [];
          break;
        case '2fa':
          state.twofa = el.params === '1';
          break;
        case 'bannertargetblank':
          state.bannertargetblank = el.params === '1';
          break;
        default:
          state[el.key] = el.params;
          break;
      }
    });
  },
  SET_FAQ_WITHDRAW(state, faqwithdraw) {
    state.faqwithdraw = faqwithdraw;
  },
  SET_FAQ_DEPOSIT(state, faqdeposit) {
    state.faqdeposit = faqdeposit;
  },
  SET_FAQ_SUPPORT(state, faqsupport) {
    state.faqsupport = faqsupport;
  },
  TOGGLE_SIDEBAR(state) {
    state.sidebar.opened = !state.sidebar.opened;
  },
  CLOSE_SIDEBAR(state) {
    state.sidebar.opened = false;
  },
  TOGGLE_DEVICE(state, device) {
    state.device = device;
  },
};

export const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }) {
    commit('CLOSE_SIDEBAR');
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
};
