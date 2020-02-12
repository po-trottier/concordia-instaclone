<template>
  <div>
    <v-container class="pt-10 mb-12">
      <v-row
        no-gutters
        class="narrow">
        <v-col
          cols="8"
          class="pr-6">
          <app-posts-feed />
        </v-col>
        <v-col cols="4">
          <app-suggested />
        </v-col>
      </v-row>
    </v-container>
    <div class="bottom narrow text-right">
      <v-btn
        rounded
        dark
        color="primary"
        elevation="6"
        height="48"
        class="px-6"
        :to="{ name: 'upload' }">
        <span class="white--text mr-2">
          New Post
        </span>
        <v-icon color="white">
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import PostsFeed from '@/components/Feed/PostsFeed.vue';
import Suggested from '@/components/Feed/Suggested.vue';

export default {
  name: 'Feed',

  components: {
    appPostsFeed: PostsFeed,
    appSuggested: Suggested,
  },
};
</script>

<style>
  .bottom {
    position: fixed;
    bottom: 32px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
  }
</style>
