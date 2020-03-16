<template>
  <v-card
    flat
    outlined>
    <v-card-text>
      <h3>
        Suggested Accounts
      </h3>
      <v-divider class="my-3" />
      <v-list
        v-if="getSuggested.length > 0"
        class="pa-0 mt-n2">
        <app-suggested-item
          v-for="suggested in getSuggested"
          :key="suggested.uid"
          :user="suggested" />
      </v-list>
      <p
        v-else
        class="ma-0">
        No accounts found
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SuggestedItem from './SuggestedItem.vue';

export default {
  name: 'Suggested',

  computed: {
    ...mapGetters('posts', ['getSuggested']),
  },

  methods: {
    ...mapActions('posts', ['querySuggested']),
  },

  components: {
    appSuggestedItem: SuggestedItem,
  },

  created() {
    this.querySuggested();
  },
};
</script>
