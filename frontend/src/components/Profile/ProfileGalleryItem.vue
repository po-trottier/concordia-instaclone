<template>
  <div
    class="gallery-item white--text ma-3"
    style="font-size: 1.2rem; font-weight: 600; position: relative;">
    <v-img
      aspect-ratio="1"
      src="@/assets/account-placeholder.png" />
    <div class="gallery-info">
      <span class="pointer mr-6">
        <v-icon
          color="white">
          mdi-heart
        </v-icon>
        100
      </span>
      <span class="pointer">
        <v-icon
          style="transform: scaleX(-1)"
          color="white">
          mdi-chat
        </v-icon>
        100
      </span>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'ProfileGalleryItem',
});
</script>

<style>
.gallery-item:hover .gallery-info,
.gallery-item:focus .gallery-info {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.gallery-info {
    display: none;
}
</style>
