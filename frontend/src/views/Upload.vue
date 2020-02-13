<template>
  <v-container>
    <h1 class="mb-6">
      Upload
    </h1>
    <v-img
      :src="data"
      v-if="data"
      contain=""
      max-height="300"
      class="my-10" />
    <v-file-input
      v-model="file"
      style="max-width: 500px;"
      label="Select an image"
      accept="image/*"
      solo
      clearable
      dense
      single-line
      show-size />
    <v-btn
      :disabled="!file"
      :loading="progress"
      @click="upload"
      color="primary">
      Upload
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Upload',

  data() {
    return {
      progress: false,
      file: null,
      data: null,
    };
  },

  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },

  watch: {
    file() {
      this.data = URL.createObjectURL(this.file);
    },
  },

  methods: {
    ...mapActions('posts', ['addPost']),

    upload() {
      this.progress = true;

      this.addPost({
        file: this.file,
      })
        .then(() => {
          this.progress = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  created() {
    if (!this.loggedIn) {
      this.$router.replace({ name: 'landing' });
    }
  },
};
</script>
