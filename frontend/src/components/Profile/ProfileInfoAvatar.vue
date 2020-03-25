<template>
  <v-avatar size="150">
    <v-img :src="image" />
  </v-avatar>
</template>

<script>
import { mapGetters } from 'vuex';
import placeholder from '@/assets/account-placeholder.png';


export default ({
  name: 'ProfileInfoAvatar',

  data() {
    return {
      image: placeholder,
    };
  },

  computed: {
    ...mapGetters('profile', ['profile']),
  },

  watch: {
    profile(val) {
      if (!val.picture || val.picture.trim().length < 1) {
        this.image = placeholder;
        return;
      }
      const storage = this.$firebase.storage();
      const imageRef = storage.refFromURL(val.picture);
      imageRef.getDownloadURL()
        .then((url) => {
          this.image = url;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
</script>
