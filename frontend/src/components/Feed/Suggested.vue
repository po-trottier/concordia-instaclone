<template>
  <v-card
    flat
    outlined>
    <v-card-text>
      <h3>
        Suggested Accounts
      </h3>
      <v-divider class="my-3" />
      <v-list class="pa-0 mt-n2">
        <app-suggested-item
          v-for="i in 5"
          :key="i"
          :user="user" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import SuggestedItem from './SuggestedItem.vue';

export default {
  name: 'Suggested',

  data() {
    return {
      user: { username: 'username', uid: '1234' },
    };
  },

  components: {
    appSuggestedItem: SuggestedItem,
  },
};
</script>

<style scoped>

</style>
