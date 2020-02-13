<template>
  <v-container>
    <v-row
      no-gutters
      class="narrow mt-4">
      <v-col
        cols="4"
        v-for="item in 13"
        :key="item.id">
        <app-gallery-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileGalleryItem from './ProfileGalleryItem.vue';

export default ({
  name: 'ProfileGallery',
  components: {
    appGalleryItem: ProfileGalleryItem,
  },
});
</script>
