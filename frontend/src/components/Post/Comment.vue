<template>
  <div>
    <v-col
      cols="12">
      <router-link
        :to="{ name: 'user', params: { uid: comment.user } }"
        class="black--text">
        <v-avatar
          size="32"
          class="mr-2">
          <v-img :src="profile" />
        </v-avatar>
        <span
          class="sm-font font-weight-medium"
          style="font-size: 1rem">
          {{ comment.username }}
        </span>
      </router-link>
      {{ comment.content }}
      <v-row
        no-gutters
        class="mt-4">
        <p
          class="xs-font"
          style="opacity: 0.6;">
          {{ time }}
        </p>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import * as timeago from 'timeago.js';
import account from '@/assets/account-placeholder.png';

export default {
  name: 'Comment',
  props: {
    comment: {
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
  computed: {
    time() {
      return timeago.format(this.comment.timestamp.toDate());
    },
  },
  // get post image after firestore request completed and watching for this.getPost changing
  mounted() {
    const storage = this.$firebase.storage();
    // Get the post's picture
    const imageRef = storage.refFromURL(this.comment.user_picture);
    imageRef.getDownloadURL()
      .then((url) => {
        this.image = url;
      })
      .catch((err) => {
        console.log(err);
      });
    // If the user has a profile picture, get it
    if (this.comment.user_picture) {
      const profileRef = storage.refFromURL(this.comment.user_picture);
      profileRef.getDownloadURL()
        .then((url) => {
          this.profile = url;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
