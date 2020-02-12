<template>
  <v-container>
    <v-row
      no-gutters
      class="narrow mt-4">
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="item in 13"
        :key="item.id">
        <div
          class="gallery-item white--text ma-3"
          style="font-size: 1.2rem; font-weight: 600; position: relative;">
          <v-img
            aspect-ratio="1"
            src="@/assets/account-placeholder.png" />
          <div class="gallery-info">
            <span class="pointer mr-6">
              <v-icon
                class="mr-1"
                color="white">
                mdi-heart
              </v-icon>
              100
            </span>
            <span class="pointer">
              <v-icon
                class="mr-1"
                color="white">
                mdi-comment
              </v-icon>
              100
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
  name: 'ProfileGallery',
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
