<template>
  <v-container align="center">
    <v-row
      no-gutters
      class="narrow">
      <v-col
        cols="12"
        md="4"
        v-for="item in 13"
        :key="item.id">
        <div class="gallery-item ma-3">
          <v-img src="@/assets/account-placeholder.png" />
          <div class="gallery-item-info">
            <v-icon class="icon">
              mdi-heart
            </v-icon>
            <span class="likes">100</span>
            <v-icon class="icon">
              mdi-chat
            </v-icon>
            <span>100</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
  name: 'ProfileGallery',
  data() {
    return {

      gallery: [

      ],
    };
  },
});
</script>

<style>

.gallery-item {
    position: relative;
    color: #fff;
    cursor: pointer;
}

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
    font-size: 1.2rem;
    font-weight: 600;
}

.likes {
    margin-right: 2.0rem;
}

.container {
  position: relative;
}

.icon {
    -webkit-text-fill-color: #fff;
    margin-right: 0.3rem;
    transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
}
</style>
