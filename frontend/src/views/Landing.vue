<template>
  <div>
    <h1>
      Landing
    </h1>
    <v-img
      :src="photo"
      max-width="500"
      class="my-12" />
    <v-btn :to="{ name: 'feed' }">
      Go to feed
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Landing',

  data() {
    return {
      photo: '',
    };
  },

  mounted() {
    const storage = this.$firebase.storage();
    const ref = storage.refFromURL('gs://soen341-instaclone.appspot.com/posts/GaLD5LFkQM72afXypHqa.jpg');
    ref.getDownloadURL()
      .then((url) => {
        this.photo = url;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>

</style>
