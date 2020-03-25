<template>
  <v-row
    align="center"
    justify="center"
    justify-sm="start">
    <p class="lg-font my-auto">
      {{ profile.username }}
    </p>
    <div
      v-if="loggedIn && user.uid === profile.uid"
      class="my-auto">
      <v-btn
        small
        depressed
        outlined
        color="dark lighten-4"
        class="ml-6 hide-mobile"
        :to="{ name: 'edit' }">
        <span>
          Edit Profile
        </span>
      </v-btn>
      <v-btn
        icon
        color="grey darken-2"
        class="ml-2 show-mobile"
        :to="{ name: 'edit' }">
        <v-icon>
          mdi-cog-outline
        </v-icon>
      </v-btn>
    </div>
    <v-btn
      v-if="user.uid !== profile.uid && followStatus !== true"
      depressed
      class="ml-6"
      color="primary"
      @click="follow">
      Follow
    </v-btn>
    <v-btn
      v-if="user.uid !== profile.uid && followStatus === true"
      depressed
      class="ml-6"
      @click="unfollow">
      Unfollow
    </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default ({
  name: 'ProfileInfoUsername',

  methods: {
    ...mapActions('profile', ['followUser', 'unfollowUser']),
    follow() {
      this.followUser(this.profile.uid);
    },
    unfollow() {
      this.unfollowUser(this.profile.uid);
    },
  },
  computed: {
    ...mapGetters('profile', ['profile', 'followStatus']),
    ...mapGetters('auth', ['loggedIn', 'user']),
  },
});
</script>
