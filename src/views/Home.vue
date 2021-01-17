<template>
  <div class="home-page pt-3 pt-lg-5">
    <b-container>
      <search-input
        :search-handler="searchInputHandler"
        :loading="packagesListLoading"
        v-model="query"
      />
      <packages-list
        class="mt-5"
        v-if="packagesList.length > 0"
        @change-page="changePageHandler"
        @row-clicked="clickRowHandler"
        :loading="packagesListLoading"
        :pagination="pagination"
        :data="packagesList"
      />
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { SEARCH_DELAY } from '@/config';
import debounce from '@/utils/debounce';
import PackagesList from '@/components/PackagesList.vue';

import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'HomePage',

  components: {
    SearchInput,
    PackagesList,
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
      pagination: ({ packages }) => packages.pagination,
    }),
  },

  methods: {
    ...mapActions({
      searchPackages: 'packages/search',
      getPackage: 'packages/getByName',
      resetSearchPackages: 'packages/resetSearch',
    }),

    clickRowHandler(index) {
      this.selected = { ...this.packagesList[index] };
    },

    changePageHandler(page) {
      this.searchPackages({
        query: this.query,
        page,
      });
    },

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
