<template>
  <b-modal
    id="packageDetailsModal"
    :title="title"
    @hidden="$emit('hidden')"
    ok-only
  >
    <div v-if="data" class="package-details">
      <p>
        {{ data.description }}
      </p>
      <div class="pt-2 pb-2 package__keywords" v-if="data.keywords && data.keywords.length">
        <!-- <h5>Tags:</h5> -->
        <b-badge
          variant="light"
          class="border-light mr-1"
          v-for="(name, idx) of data.keywords"
          :key="idx"
        >
          {{ name }}
        </b-badge>
      </div>
      <div class="pt-2 pb-2 package__keywords" v-if="data.maintainers && data.maintainers.length">
        <!-- <h5>Maintainers:</h5> -->
        <b-badge
          variant="light"
          class="border-light mr-1"
          v-for="(maintainer, idx) of data.maintainers"
          :key="idx"
        >
          {{ maintainer.username }}
        </b-badge>
      </div>
      <div
        v-if="data.author || data.publisher"
        class="pt-2 pb-2 package__keywords"
      >
        <div>
          <div v-if="data.author">
            <b>{{ data.author.name }}</b>
          </div>
          <div v-if="data.publisher">
            <b>{{ data.publisher.username }}</b>
            <a :href="`mailto:${data.publisher.email}`" target="_blank">
              {{data.publisher.email}}
            </a>
          </div>
        </div>
        <div>
          published: {{ formatDateTime(data.date) }}
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { formatDateTime } from '@/utils/format';

export default {
  name: 'PackageDetailsModal',

  props: {
    data: {
      type: Object,
    },
  },

  data() {
    return {
      name: '',
    };
  },

  computed: {
    title() {
      if (this.data) {
        return `${this.data.name} - ${this.data.version}`;
      }
      return '';
    },
  },

  methods: {
    formatDateTime,
  },
};
</script>
