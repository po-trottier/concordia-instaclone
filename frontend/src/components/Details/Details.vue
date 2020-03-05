<template>
  <div>
    <v-card
      v-if="getPost"
      flat>
      <v-img
        :src="image"
        id="postImage"
        width="100%"
        aspect-ratio="1" />
      <app-post-sidebar :profile="profile" />
    </v-card>
    <v-card v-else>
      <h1>Post Loading</h1>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import account from '@/assets/account-placeholder.png';
import PostSidebar from './Sidebar.vue';

export default {
  name: 'Post',

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
            console.log(err);
          });
        // If the user has a profile picture, get it
        if (this.getPost.user_picture) {
          const profileRef = storage.refFromURL(this.getPost.user_picture);
          profileRef.getDownloadURL()
            .then((url) => {
              this.profile = url;
            })
            .catch((err) => {
              console.log(err);
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
