import { packages } from '@/http';
import * as types from './mutation-types';
import { createPagination } from './state';

function transformResponse(response, params) {
  return {
    data: response.objects.map((o) => o.package),
    pagination: {
      pages: Math.ceil(response.total / params.size),
      page: params.from,
      limit: params.size,
      total: response.total,
    },
  };
}

export default {
  resetSearch({ commit }) {
    commit(types.SET_LIST, []);
    commit(types.SET_PAGINATION, createPagination());
  },

  async search({ state, commit }, params) {
    try {
      commit(types.SET_LOADING, { list: true });
      const size = params.limit || state.pagination.limit;
      const page = params.page || state.pagination.page;

      const reqQuery = {
        size,
        text: params.query,
        from: size * (page - 1),
      };

      console.log('req params', reqQuery, params);

      const res = await packages.search(reqQuery);

      const { data, pagination } = transformResponse(res, reqQuery);
      console.log(pagination);

      commit(types.SET_LIST, data);
      commit(types.SET_PAGINATION, pagination);
    } finally {
      commit(types.SET_LOADING, { list: false });
    }
  },

  async getByName({ commit }, name) {
    try {
      commit(types.SET_LOADING, { package: true });
      const data = await packages.getByName(name);
      console.log(data);
    } finally {
      commit(types.SET_LOADING, { package: false });
    }
  },
};
