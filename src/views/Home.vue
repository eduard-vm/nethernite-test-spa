<template>
  <div class="home-page pt-3 pt-lg-5">
    <b-container>
      <search-input
        :search-handler="searchInputHandler"
        :loading="packagesListLoading"
        v-model="query"
      />
      {{ packagesList }}
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { SEARCH_DELAY } from '@/config';
import debounce from '@/utils/debounce';

import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'HomePage',

  components: {
    SearchInput,
  },

  data() {
    return {
      query: '',
      loading: false,
      selected: null,
    };
  },

  computed: {
    ...mapState({
      packagesList: ({ packages }) => packages.list,
      packagesListLoading: ({ packages }) => packages.loading.list,
    }),
  },

  methods: {
    ...mapActions({
      searchPackages: 'packages/search',
      getPackage: 'packages/getByName',
      resetSearchPackages: 'packages/resetSearch',
    }),

    searchInputHandler: debounce(function search(query) {
      if (query) {
        this.searchPackages({ query });
      } else {
        this.resetSearchPackages();
      }
    }, SEARCH_DELAY),
  },
};
</script>
