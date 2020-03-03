<template>
  <v-container>
    <v-card
      max-width="500"
      class="mx-auto mt-6">
      <v-card-title class="justify-center">
        <h1 class="text-center my-6">
          Create a Post
        </h1>
      </v-card-title>
      <v-card-text>
        <v-img
          :src="data"
          v-if="data"
          style="border-radius: 4px;"
          contain
          class="mb-10" />
        <v-file-input
          v-model="file"
          class="mb-6"
          label="Select an image"
          accept="image/*"
          hint="Maximum File Size: 5 MB"
          :rules="rules"
          prepend-icon=""
          persistent-hint
          solo
          outlined
          flat
          clearable
          dense
          single-line
          show-size />
        <v-form>
          <v-col
            cols="12"
            sm="1"
            md="12">
            <v-textarea
              auto-grow
              clearable
              outlined
              label="Write a Caption..." />
          </v-col>
        </v-form>
        <v-btn
          large
          block
          depressed
          :disabled="file ? file.size > 5242880 : true"
          :loading="progress"
          @click="upload"
          color="primary">
          Upload
        </v-btn>
      </v-card-text>
    </v-card>
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
      rules: [
        file => (file ? file.size <= 5242880 : true) || 'File must be smaller than 5 MB',
      ],
    };
  },

  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },

  watch: {
    file() {
      if (!this.file) {
        this.data = null;
        return;
      }
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
          this.$router.push({ name: 'feed' });
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
