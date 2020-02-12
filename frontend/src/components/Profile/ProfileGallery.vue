<template>
  <v-container>
    <v-row
      no-gutters
      class="narrow mt-4">
      <v-col
        cols="12"
<<<<<<< HEAD
        md="6"
        lg="4"
        v-for="item in 13"
        :key="item.id">
        <div
          class="gallery-item ma-3"
          style="font-size: 1.2rem; font-weight: 600;">
          <v-img
            aspect-ratio="1"
            src="@/assets/account-placeholder.png" />
          <div class="gallery-item-info">
            <v-icon
              class="mr-1"
              color="white">
              mdi-heart
            </v-icon>
            <span class="mr-6">100</span>
            <v-icon
              class="mr-1"
              color="white"
              style="transform: scaleX(-1)">
              mdi-chat
            </v-icon>
            <span>100</span>
          </div>
        </div>
=======
        sm="6"
        lg="4"
        v-for="item in 13"
        :key="item.id">
        <app-gallery-item />
>>>>>>> master
      </v-col>
    </v-row>
  </v-container>
</template>
<<<<<<< HEAD
<script>
import '@/styles/IG-styling.css';

export default ({
  name: 'ProfileGallery',
});
</script>
<style>
.gallery-item:hover .gallery-item-info,
.gallery-item:focus .gallery-item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.gallery-item-info {
    display: none;
}
</style>
=======

<script>
import ProfileGalleryItem from './ProfileGalleryItem.vue';

export default ({
  name: 'ProfileGallery',

  components: {
    appGalleryItem: ProfileGalleryItem,
  },
});
</script>
>>>>>>> master
