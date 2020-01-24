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
        <div class="py-1 d-flex align-center">
          <v-img
            contain
            width="24"
            alt="Instagram Logo"
            src="@/assets/logo.png"
            class="shrink" />
          <v-divider
            vertical
            class="mx-3" />
          <v-img
            contain
            height="32"
            alt="Instagram Text Logo"
            src="@/assets/text-logo.png"
            class="shrink mt-1" />
        </div>
        <v-spacer />
        <v-text-field
          dense
          flat
          solo
          outlined
          hide-details
          clearable
          placeholder="Search"
          class="small-search mt-1" />
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-compass-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderBar',
};
</script>

<style scoped>
  #header {
    border-bottom: 1px solid #dbdbdb !important;
  }

  .small-search {
    max-width: 350px;
  }
</style>
