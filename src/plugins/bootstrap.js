import Vue from 'vue';
import {
  BContainer,

  BFormInput,
  BTable,
  BPagination,
  BBadge,

  ModalPlugin,
} from 'bootstrap-vue';

/** Components */
Vue.component('BFormInput', BFormInput);
Vue.component('BTable', BTable);
Vue.component('BPagination', BPagination);
Vue.component('BBadge', BBadge);
/** Layout and Grid */
Vue.component('BContainer', BContainer);
/** Plugins */
Vue.use(ModalPlugin);
