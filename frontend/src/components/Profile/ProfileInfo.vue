<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
      class="narrow my-10">
      <v-col
        class="my-auto text-center mb-8 mb-sm-auto"
        cols="12"
        sm="4">
        <app-profile-avatar />
      </v-col>
      <v-col
        class="pl-0 pl-sm-6 pl-md-0"
        cols="12"
        sm="8">
        <app-profile-username />
        <app-profile-stats />
        <app-profile-content />
      </v-col>
    </v-row>
    <v-divider class="narrow" />
  </v-container>
</template>

<script>
import ProfileInfoAvatar from './ProfileInfoAvatar.vue';
import ProfileInfoUsername from './ProfileInfoUsername.vue';
import ProfileInfoStats from './ProfileInfoStats.vue';
import ProfileInfoContent from './ProfileInfoContent.vue';

export default ({
  name: 'ProfileInfo',

  components: {
    appProfileAvatar: ProfileInfoAvatar,
    appProfileUsername: ProfileInfoUsername,
    appProfileStats: ProfileInfoStats,
    appProfileContent: ProfileInfoContent,
  },
});
</script>
