<template>
  <div class="pa-6">
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
    <v-row
      no-gutters
      class="my-2">
      <v-btn
        @click="toggleLike"
        icon
        height="32"
        width="32"
        class="mr-1"
        :color="isLiked ? 'red' : 'grey'">
        <v-icon>
          {{ isLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
        </v-icon>
      </v-btn>
      <span
        class="xs-font font-weight-bold text-uppercase my-auto"
        style="opacity: 0.8;">
        {{ likes }} likes
      </span>
    </v-row>
    <div class="mb-4">
      <p class="mb-2">
        {{ getPost.description }}
      </p>
      <p
        class="xs-font"
        style="opacity: 0.6;">
        {{ time }}
      </p>
    </div>
    <v-divider class="my-4" />
    <div v-if="getPost.comments && getPost.comments.length > 0">
      <app-comment
        v-for="item in getPost.comments"
        :key="item.id"
        :comment="item" />
    </div>
    <div v-else>
      <p style="opacity: 0.6;">
        <i>No comments here!</i>
      </p>
    </div>
    <v-textarea
      v-model="comment"
      dense
      solo
      flat
      hide-details
      no-resize
      background-color="light"
      rows="4"
      class="mt-8"
      placeholder="Add a comment" />
    <v-btn
      depressed
      block
      color="primary"
      class="mt-4"
      @click="addComment"
      :loading="progress"
      :disabled="!comment || comment.trim().length < 1">
      Send
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as timeago from 'timeago.js';
import account from '@/assets/account-placeholder.png';
import Comment from './Comment.vue';

export default {
  name: 'PostSidebar',
  props: {
    profile: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      comment: null,
      progress: false,
      likes: 0,
      liked: false,
      profileDefault: account,
    };
  },

  computed: {
    ...mapGetters('post', ['getPost']),
    time() {
      return timeago.format(this.getPost.timestamp.toDate());
    },
    isLiked() {
      return this.liked;
    },
  },

  methods: {
    ...mapActions('post', ['addPostComment']),
    toggleLike() {
      if (!this.liked) {
        this.likePhoto();
      } else {
        this.unlikePhoto();
      }
    },
    likePhoto() {
      this.likes++;
      this.liked = true;
    },
    unlikePhoto() {
      this.likes--;
      this.liked = false;
    },
    addComment() {
      this.progress = true;
      this.addPostComment({
        comment: this.comment,
        id: this.getPost.id,
      }).then(() => {
        this.comment = null;
      }).finally(() => {
        this.progress = false;
      });
    },
  },

  components: {
    appComment: Comment,
  },
};
</script>
