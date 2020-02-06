<template>
  <v-container class="pt-10">
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
