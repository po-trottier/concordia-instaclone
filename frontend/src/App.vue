<template>
  <v-app>
    <router-view name="header" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  methods: {
    ...mapActions('auth', ['setUser']),
  },

  created() {
    if (localStorage.user) {
      this.setUser(JSON.parse(localStorage.user));
    }
  },
};
</script>
