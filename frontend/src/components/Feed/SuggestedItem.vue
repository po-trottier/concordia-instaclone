<template>
  <v-list-item
    v-if="suggested.uid !== user.uid"
    class="px-0">
    <v-row
      no-gutters
      align="center">
      <router-link
        :to="{ name: 'user', params: { uid: suggested.uid } }"
        class="font-weight-medium dark--text">
        <p class="ma-0">
          {{ suggested.username }}
        </p>
      </router-link>
      <v-btn
        class="ml-auto"
        width="100"
        small
        depressed
        :color="following ? 'light' : 'primary'"
        @click="toggleFollow">
        {{ following ? 'Unfollow' : 'Follow' }}
      </v-btn>
    </v-row>
  </v-list-item>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SuggestedItem',

  props: {
    suggested: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions('profile', ['followUser', 'unfollowUser']),

    toggleFollow() {
      if (this.following) {
        this.unfollow();
      } else {
        this.follow();
      }
    },
    follow() {
      this.followUser(this.suggested.uid);
    },
    unfollow() {
      this.unfollowUser(this.suggested.uid);
    },
  },

  computed: {
    ...mapGetters('auth', ['user']),

    following() {
      return this.user.following.includes(this.suggested.uid);
    },
  },
};
</script>

<style scoped>

</style>
