<template>
  <div class="search-input">
    <b-form-input
      v-model="query"
      @input="searchHandler"
      type="search"
      placeholder="Enter package name"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',

  props: {
    value: String,
    loading: Boolean,
    searchHandler: {
      type: Function,
      default() {
        return function search(value) {
          return value;
        };
      },
    },
  },

  computed: {
    query: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
