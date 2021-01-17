import * as types from './mutation-types';

export default {
  [types.SET_PAGINATION](state, pagination) {
    state.pagination = pagination;
  },

  [types.SET_LIST](state, list) {
    state.list = Object.freeze(list);
  },

  [types.SET_LOADING](state, loading = {}) {
    Object.keys(loading).forEach((k) => {
      state.loading[k] = loading[k];
    });
  },
};
