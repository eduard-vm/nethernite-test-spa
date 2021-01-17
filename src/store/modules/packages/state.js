export const createPagination = (pagination = {}) => ({
  limit: 10,
  total: 0,
  pages: 0,
  page: 1,
  ...pagination,
});

export default {
  list: [],
  pagination: createPagination(),
  loading: {
    list: false,
    package: false,
  },
};
