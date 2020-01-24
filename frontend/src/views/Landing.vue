<template>
  <div>
    <h1>
      Landing
    </h1>
    <v-btn :to="{ name: 'feed' }">
      Go to feed
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<style scoped>

</style>
