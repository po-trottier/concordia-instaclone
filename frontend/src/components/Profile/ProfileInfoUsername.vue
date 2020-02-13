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
        color="light darken-3"
        class="ml-2 show-mobile"
        :to="{ name: 'edit' }">
        <v-icon>
          mdi-settings
        </v-icon>
      </v-btn>
    </div>
    <v-btn
      v-else
      depressed
      class="ml-6"
      color="primary">
      Follow
    </v-btn>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default ({
  name: 'ProfileInfoUsername',

  computed: {
    ...mapGetters('profile', ['profile']),
    ...mapGetters('auth', ['loggedIn', 'user']),
  },
});
</script>
