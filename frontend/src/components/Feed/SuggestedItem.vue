<template>
  <v-list-item class="px-0">
    <v-row
      no-gutters
      align="center">
      <router-link
        :to="{ name: 'user', params: { uid: user.uid } }"
        class="font-weight-medium dark--text">
        <p class="ma-0">
          {{ user.username }}
        </p>
      </router-link>
      <v-btn
        class="ml-auto"
        width="100"
        small
        depressed
        :color="following ? 'light' : 'primary'"
        @click="following = !following">
        {{ following ? 'Unfollow' : 'Follow' }}
      </v-btn>
    </v-row>
  </v-list-item>
</template>

<script>
export default {
  name: 'SuggestedItem',

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      following: false,
    };
  },
};
</script>

<style scoped>

</style>
