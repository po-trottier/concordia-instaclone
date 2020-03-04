<template>
  <div style="width: 100%;">
    <v-row
      no-gutters
      class="my-2">
      <v-btn
        @click="toggleLike"
        icon
        class="mr-1"
        :color="isLiked ? 'red' : 'grey'">
        <v-icon>
          mdi-heart-outline
        </v-icon>
      </v-btn>
      <span
        class="xs-font font-weight-bold text-uppercase my-auto"
        style="opacity: 0.8;">
        {{ likes }} likes
      </span>
    </v-row>
    <div
      class="px-3"
      style="width: 100%;">
      <v-row no-gutters>
        <p class="mb-2">
          {{ content.description }}
        </p>
      </v-row>
      <v-row no-gutters>
        <p
          class="xs-font"
          style="opacity: 0.6;">
          {{ time }}
        </p>
      </v-row>
      <v-divider />
    </div>
    <v-row
      no-gutters
      class="pt-2 pr-3">
      <v-text-field
        v-model="comment"
        dense
        solo
        flat
        hide-details
        placeholder="Add a comment" />
      <v-btn
        @click="post"
        color="primary"
        :disabled="!comment || comment.trim().length < 1"
        depressed>
        Send
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import * as timeago from 'timeago.js';
import account from '@/assets/account-placeholder.png';

export default {
  name: 'PostActions',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      comment: null,
      likes: 0,
      liked: false,
      profileDefault: account,
    };
  },
  computed: {
    time() {
      return timeago.format(this.content.timestamp.toDate());
    },
    isLiked() {
      return this.liked;
    },
  },

  methods: {
    toggleLike() {
      if (!this.liked) {
        this.likePhoto();
      } else {
        this.unlikePhoto();
      }
    },
    likePhoto() {
      // this.content.likes_count += 1;
      this.likes++;
      this.liked = true;
    },
    unlikePhoto() {
      // this.content.likes_count -= 1;
      this.likes--;
      this.liked = false;
    },
    post() {
      console.log(`Comment: ${this.comment} (${this.content.id})`);
      this.comment = null;
    },
  },
};
</script>
