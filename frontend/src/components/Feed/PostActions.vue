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
          {{ isLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
        </v-icon>
      </v-btn>
      <span
        class="xs-font font-weight-bold text-uppercase my-auto"
        style="opacity: 0.8;">
        {{ count }} {{ count > 1 ? 'likes' : 'like' }}
      </span>
    </v-row>
    <div
      class="px-3"
      style="width: 100%;">
      <v-row no-gutters>
        <p
          class="mb-2">
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as timeago from 'timeago.js';

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
      count: this.content.likes_count,
    };
  },

  computed: {
    ...mapGetters('auth', ['user']),
    descriptionWithTags() {
      return this.content.description.replace(/(^|\s)(#[a-zA-Z\d-]+)/ig, "$1<a href='#$2'>$2</a>");
    },
    time() {
      return timeago.format(this.content.timestamp.toDate());
    },
    isLiked() {
      return this.user.likes.includes(this.content.id);
    },
  },

  methods: {
    ...mapActions('posts', ['likePost', 'unlikePost']),
    toggleLike() {
      if (!this.isLiked) {
        this.count++;
        this.likePost(this.content.id);
      } else {
        this.count--;
        this.unlikePost(this.content.id);
      }
    },
  },
};
</script>
