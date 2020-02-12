<template>
  <v-autocomplete
    :allow-overflow="false"
    dense
    flat
    solo
    outlined
    clearable
    hide-details
    hide-no-data
    append-icon=""
    color="dark"
    placeholder="Search"
    class="small-search" />
</template>

<script>
export default {
  name: 'HeaderSearch',
};
</script>

<style scoped>
  .small-search {
    max-width: 350px;
  }
</style>
