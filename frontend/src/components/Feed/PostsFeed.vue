<template>
  <div>
    <div v-if="getPosts.length > 0">
      <app-post
        v-for="post in getPosts"
        :key="post.id"
        :content="post" />
    </div>
    <div v-else>
      <h1>Posts Loading</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'PostsFeed',

  computed: {
    ...mapGetters('posts', ['getPosts']),
  },

  methods: {
    ...mapActions('posts', ['queryPosts']),
  },

  mounted() {
    this.queryPosts();
  },

  components: {
    appPost: Post,
  },
};
</script>

<style scoped>

</style>
