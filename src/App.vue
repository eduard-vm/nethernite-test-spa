<template>
  <div id="app">
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppFooter },
};
</script>
<style lang="scss">
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: calc(100vh - 120px);
}
</style>
