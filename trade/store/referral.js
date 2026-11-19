export const state = () => ({
  rewards: [],
  userRewards: [],
  userReferrers: [],
});

export const getters = {
  rewards(state) {
    return state.rewards;
  },
  userRewards(state) {
    return state.userRewards;
  },
  userReferrers(state) {
    return state.userReferrers;
  },
};

export const mutations = {
  SET_REWARDS(state, rewards) {
    state.rewards = rewards;
  },
  SET_USER_REWARDS(state, userRewards) {
    state.userRewards = userRewards;
  },
  SET_USER_REFERRERS(state, userReferrers) {
    state.userReferrers = userReferrers;
  },
};

export const actions = {
  getRewards({ commit }) {
    return this.$http.get('/api/rewards').then(async res => {
      const body = await res.json();
      commit('SET_REWARDS', body);
    });
  },
  getReferrers({ commit }) {
    return this.$http.get('/api/rewards/rewards-by-user').then(async res => {
      const body = await res.json();
      commit('SET_USER_REWARDS', body.rewards);
      commit('SET_USER_REFERRERS', body.referrers);
    });
  },
  // eslint-disable-next-line camelcase
  claimReward({ commit, state }, reward_id) {
    // eslint-disable-next-line camelcase
    return this.$http.post('/api/rewards/user-request', { reward_id }).then(async res => {
      const body = await res.json();
      commit('SET_USER_REWARDS', [...state.userRewards, body]);
    });
  },
};
