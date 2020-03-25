<template>
  <div>
    <div v-if="getPosts.length > 0">
      <app-post
        v-for="post in getPosts"
        :key="post.id"
        :content="post" />
    </div>
    <v-card
      v-else-if="loading"
      flat
      outlined
      class="pa-6">
      <v-card-title class="justify-center">
        <h2 class="text-center mb-6">
          Post Loading...
        </h2>
      </v-card-title>
      <v-card-subtitle class="text-center">
        <v-progress-circular
          indeterminate
          width="4"
          size="64"
          color="primary" />
      </v-card-subtitle>
    </v-card>
    <v-card
      v-else
      flat
      outlined
      class="pa-6">
      <v-card-title class="justify-center">
        <h2 class="text-center mb-6">
          No Posts Found...
        </h2>
      </v-card-title>
      <v-card-subtitle>
        <p class="md-font mb-0 text-center">
          Please follow more users to see their posts!
        </p>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'PostsFeed',

  data() {
    return {
      loading: false,
    };
  },

  computed: {
    ...mapGetters('posts', ['getPosts']),
  },

  methods: {
    ...mapActions('posts', ['queryPosts']),
  },

  mounted() {
    this.loading = true;
    this.queryPosts().finally(() => {
      this.loading = false;
    });
  },

  components: {
    appPost: Post,
  },
};
</script>

<style scoped>

</style>
