<template>
  <v-app-bar
    id="header"
    app
    flat
    height="75"
    color="white">
    <v-container>
      <v-row
        no-gutters
        align="center"
        class="narrow">
        <app-header-logo />
        <v-spacer />
        <app-header-search />
        <v-spacer />
        <app-header-actions />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue';
import HeaderSearch from './HeaderSearch.vue';
import HeaderActions from './HeaderActions.vue';

export default {
  name: 'HeaderBar',

  components: {
    appHeaderLogo: HeaderLogo,
    appHeaderSearch: HeaderSearch,
    appHeaderActions: HeaderActions,
  },
};
</script>

<style scoped>
  #header {
    border-bottom: 1px solid #dbdbdb !important;
  }
</style>
