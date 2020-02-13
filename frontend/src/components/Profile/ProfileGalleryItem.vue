<template>
  <div
    class="gallery-item white--text ma-3"
    style="font-size: 1.2rem; font-weight: 600; position: relative;">
    <v-img
      aspect-ratio="1"
      :src="image" />
    <div class="gallery-info">
      <span class="pointer mr-6">
        <v-icon
          color="white">
          mdi-heart
        </v-icon>
        {{ item.likes_count }}
      </span>
      <span class="pointer">
        <v-icon
          color="white">
          mdi-comment
        </v-icon>
        {{ item.comments_count }}
      </span>
    </div>
  </div>
</template>

<script>
import placeholder from '@/assets/account-placeholder.png';

export default ({
  name: 'ProfileGalleryItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      image: placeholder,
    };
  },

  created() {
    const storage = this.$firebase.storage();
    const imageRef = storage.refFromURL(this.item.picture);
    imageRef.getDownloadURL()
      .then((url) => {
        this.image = url;
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
