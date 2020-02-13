<template>
  <v-row
    class="my-4"
    justify="center"
    justify-sm="start">
    <span class="sm-font mr-8">
      <span class="md-font">{{ profile.posts_count }}</span> posts
    </span>
    <span class="sm-font mr-8">
      <span class="md-font">{{ profile.followers_count }}</span> followers
    </span>
    <span class="sm-font">
      <span class="md-font">{{ profile.following_count }}</span> following
    </span>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default ({
  name: 'ProfileInfoStats',

  computed: {
    ...mapGetters('profile', ['profile']),
  },
});
</script>
