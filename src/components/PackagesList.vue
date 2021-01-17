<template>
  <div>
    <b-table
      hover
      :fields="fields"
      :items="items"
      @row-clicked="rowClickedHandler"
      :busy="loading"
      responsive
      striped
      tbody-tr-class="table-row table-row--clickable"
      stacked="md"
    >
      <template #cell(name)="data">
        <span class="text-nowrap">{{ data.item.name }}</span>
      </template>
      <template #cell(date)="data">
        <span class="text-nowrap">{{ formatDate(data.item.date) }}</span>
      </template>
    </b-table>
     <b-pagination
      class="mt-5"
      align="center"
      limit="10"
      v-if="pagination.pages > 1"
      v-model="currentPage"
      :total-rows="pagination.total"
      :per-page="pagination.size"
      first-number
      last-number
    ></b-pagination>
  </div>
</template>
<script>
import { formatDate } from '@/utils/format';

export default {
  name: 'PackagesList',

  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    pagination: {
      type: Object,
      default() {
        return {
          pages: 0,
          total: 0,
        };
      },
    },
    loading: Boolean,
  },

  data() {
    return {
      currentPage: 1,
      fields: [
        'name',
        'description',
        {
          label: 'Version',
          key: 'version',
          class: 'text-lg-center',
        },
        {
          label: 'Date',
          class: 'text-lg-right',
          key: 'date',
        },
      ],
    };
  },

  watch: {
    currentPage(value) {
      this.$emit('change-page', value);
    },
  },

  computed: {
    items() {
      return this.data;
    },
  },

  methods: {
    rowClickedHandler(item, index) {
      this.$emit('row-clicked', index);
    },

    formatDate,
  },
};
</script>

<style lang="scss">
  .table-row {
    &--clickable {
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
