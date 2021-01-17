import { NPM_API_ROOT } from '@/config';
import request from '../request';

export default {
  async search(query = {}) {
    return request('search', {
      query,
      host: NPM_API_ROOT,
    });
  },
  // async getByName(name) {
  //   return request(`package/npm/${name}`, {
  //     host: JSDELIVR_API_ROOT,
  //   });
  // },
};
