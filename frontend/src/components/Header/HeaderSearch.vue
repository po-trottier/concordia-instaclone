<template>
  <v-autocomplete
    v-model="model"
    :items="values"
    :loading="loading"
    :search-input.sync="search"
    :allow-overflow="false"
    no-filter
    dense
    flat
    solo
    outlined
    clearable
    hide-details
    hide-no-data
    append-icon=""
    color="primary"
    placeholder="Search"
    class="small-search" />
</template>

<script>
export default {
  name: 'HeaderSearch',

  data: () => ({
    values: [],
    loading: false,
    model: null,
    search: null,
  }),

  watch: {
    search(val) {
      // Items have already been requested or null
      if (this.loading || !val || val.trim().length < 1) {
        return;
      }
      this.loading = true;
      const query = val.toLowerCase().trim();
      // Lazily load input items
      this.$firebase.firestore().collection('users')
        .orderBy('username')
        .startAt(query)
        .endAt(`${query}\uf8ff`)
        .get()
        .then((snapshot) => {
          const users = [];
          snapshot.forEach((doc) => {
            users.push({
              text: doc.data().username,
              value: doc.data().uid,
            });
          });
          this.values = users;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    model(val) {
      if (!val) {
        return;
      }
      this.search = null;
      this.$router.push({ name: 'user', params: { uid: val } });
    },
  },
};
</script>

<style scoped>
  .small-search {
    max-width: 350px;
  }
</style>
