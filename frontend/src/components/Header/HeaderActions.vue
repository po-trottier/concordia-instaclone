<template>
  <router-link :to="{ name: 'user', params: { uid: userId } }">
    <v-btn icon>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderActions',

  computed: {
    ...mapGetters('auth', ['userId']),
  },
};
</script>
