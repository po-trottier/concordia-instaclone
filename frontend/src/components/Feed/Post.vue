<template>
  <v-card
    flat
    outlined
    class="mb-12">
    <v-card-title>
      <app-post-header
        :user="content.user"
        :username="content.username"
        :profile="profile" />
    </v-card-title>
    <v-card-text class="pa-0">
      <router-link :to="{ name: 'post', params: { id: content.id } }">
        <v-img
          :src="image"
          width="100%"
          aspect-ratio="1" />
      </router-link>
    </v-card-text>
    <v-card-actions class="px-4">
      <app-post-actions :content="content" />
    </v-card-actions>
  </v-card>
</template>

<script>
import account from '@/assets/account-placeholder.png';
import PostHeader from './PostHeader.vue';
import PostActions from './PostActions.vue';

export default {
  name: 'Post',

  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      image: '',
      profile: account,
    };
  },

  mounted() {
    const storage = this.$firebase.storage();
    // Get the post's picture
    const imageRef = storage.refFromURL(this.content.picture);
    imageRef.getDownloadURL()
      .then((url) => {
        this.image = url;
      })
      .catch((err) => {
        console.error(err);
      });
    // If the user has a profile picture, get it
    if (this.content.user_picture) {
      const profileRef = storage.refFromURL(this.content.user_picture);
      profileRef.getDownloadURL()
        .then((url) => {
          this.profile = url;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },

  components: {
    appPostHeader: PostHeader,
    appPostActions: PostActions,
  },
};
</script>
