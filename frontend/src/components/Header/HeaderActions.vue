<template>
  <router-link :to="{ name: 'account' }">
    <v-btn icon>
      <v-icon>mdi-account-outline</v-icon>
    </v-btn>
  </router-link>
</template>

<script>
export default {
  name: 'HeaderActions',
};
</script>
