<template>
  <div>
    <v-row
      class="md-font"
      justify="center"
      justify-sm="start">
      {{ profile.name }}
    </v-row>
    <v-row
      class="sm-font mb-2"
      justify="center"
      justify-sm="start">
      <a
        target="_blank"
        :href="profile.website">
        {{ profile.website }}
      </a>
    </v-row>
    <v-row
      class="sm-font"
      justify="center"
      justify-sm="start">
      {{ profile.bio }}
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default ({
  name: 'ProfileInfoContent',

  computed: {
    ...mapGetters('profile', ['profile']),
  },
});
</script>
