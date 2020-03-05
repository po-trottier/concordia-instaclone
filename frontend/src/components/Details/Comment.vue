<template>
  <v-row
    no-gutters
    align="center"
    class="my-5">
    <v-col cols="auto">
      <router-link
        :to="{ name: 'user', params: { uid: comment.user } }"
        class="black--text">
        <v-avatar
          size="40"
          class="mr-3">
          <v-img :src="profile" />
        </v-avatar>
      </router-link>
    </v-col>
    <v-col cols="auto">
      <v-row no-gutters>
        <router-link
          :to="{ name: 'user', params: { uid: comment.user } }"
          class="black--text">
          <span class="font-weight-medium mr-2">
            {{ comment.username }}
          </span>
        </router-link>
        <span>
          {{ comment.content }}
        </span>
      </v-row>
      <v-row no-gutters>
        <span
          class="xs-font"
          style="opacity: 0.6;">
          {{ time }}
        </span>
      </v-row>
    </v-col>
  </v-row>
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
      profile: account,
    };
  },

  computed: {
    time() {
      return timeago.format(this.comment.timestamp.toDate());
    },
  },

  mounted() {
    // If the user has a profile picture, get it
    const storage = this.$firebase.storage();
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
