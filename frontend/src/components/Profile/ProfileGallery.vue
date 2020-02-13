<template>
  <v-container>
    <v-row
      no-gutters
      class="narrow mt-4">
      <v-col
        cols="6"
        sm="4"
        v-for="item in items"
        :key="item.id">
        <app-gallery-item :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import ProfileGalleryItem from './ProfileGalleryItem.vue';

export default ({
  name: 'ProfileGallery',

  computed: {
    ...mapGetters('profile', ['profile']),

    items() {
      return this.profile ? this.profile.posts : [];
    },
  },

  components: {
    appGalleryItem: ProfileGalleryItem,
  },
});
</script>
