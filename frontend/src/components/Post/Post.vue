<template>
  <div>
    <v-card v-if="getPost">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="8">
          <v-card
            flat
            outlined
            class="mb-12">
            <v-card-text class="pa-0">
              <v-img
                :src="image"
                width="100%"
                aspect-ratio="1" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="4"
          md="4">
          <app-post-sidebar
            :profile="profile"
            :content="getPost" />
        </v-col>
      </v-row>
    </v-card>
    <v-card v-else>
      <h1>Post Loading</h1>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import account from '@/assets/account-placeholder.png';
import PostSidebar from './PostSidebar.vue';

export default {
  name: 'Post',
  data() {
    return {
      image: '',
      profile: account,
    };
  },
  computed: {
    ...mapGetters('post', ['getPost']),
  },
  methods: {
    ...mapActions('post', ['queryPost']),
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
