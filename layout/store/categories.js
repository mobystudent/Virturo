export const state = () => ({
  categoryList: [],
});

export const mutations = {
  setCategoryList(localState, payload) {
    // eslint-disable-next-line no-param-reassign
    localState.categoryList = payload;
  },
};
