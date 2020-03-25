<template>
  <div>
    <v-card
      v-if="getPost"
      flat
      outlined>
      <v-card-title>
        <router-link
          :to="{ name: 'user', params: { uid: getPost.user } }"
          class="black--text">
          <v-avatar
            size="48"
            class="mr-2">
            <v-img :src="profile" />
          </v-avatar>
          <span
            class="sm-font font-weight-medium"
            style="font-size: 1rem">
            {{ getPost.username }}
          </span>
        </router-link>
      </v-card-title>
      <v-img
        :src="image"
        id="postImage"
        width="100%"
        aspect-ratio="1" />
      <app-post-sidebar />
    </v-card>
    <v-card
      v-else
      flat
      outlined
      class="pa-6">
      <v-card-title class="justify-center">
        <h2 class="text-center mb-6">
          Post Loading...
        </h2>
      </v-card-title>
      <v-card-subtitle class="text-center">
        <v-progress-circular
          indeterminate
          width="4"
          size="64"
          color="primary" />
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import account from '@/assets/account-placeholder.png';
import PostSidebar from './Sidebar.vue';

export default {
  name: 'Details',

  data() {
    return {
      image: '',
      profile: account,
    };
  },

  computed: {
    ...mapGetters('details', ['getPost']),
  },

  methods: {
    ...mapActions('details', ['queryPost']),
  },

  // get post image after firestore request completed and watching for this.getPost changing
  watch: {
    getPost(newValue) {
      if (newValue) {
        const storage = this.$firebase.storage();
        // Get the post's picture
        const imageRef = storage.refFromURL(this.getPost.picture);
        imageRef.getDownloadURL()
          .then((url) => {
            this.image = url;
          })
          .catch((err) => {
            console.error(err);
          });
        // If the user has a profile picture, get it
        if (this.getPost.user_picture) {
          const profileRef = storage.refFromURL(this.getPost.user_picture);
          profileRef.getDownloadURL()
            .then((url) => {
              this.profile = url;
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
    },
  },

  mounted() {
    this.queryPost(this.$route.params.id);
  },

  components: {
    appPostSidebar: PostSidebar,
  },
};
</script>
