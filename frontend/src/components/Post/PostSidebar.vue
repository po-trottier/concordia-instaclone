<template>
  <div style="width: 100%;">
    <v-row
      no-gutters
      class="pt-2 pr-3">
      <v-col cols="12">
        <v-card-title>
          <router-link
            :to="{ name: 'user', params: { uid: content.user } }"
            class="black--text">
            <v-avatar
              size="32"
              class="mr-2">
              <v-img :src="profile" />
            </v-avatar>
            <span
              class="sm-font font-weight-medium"
              style="font-size: 1rem">
              {{ content.username }}
            </span>
          </router-link>
        </v-card-title>
      </v-col>
      <v-col
        cols="12"
        class="pt-2 pr-3">
        <v-col cols="12">
          <div
            class="px-3"
            style="width: 100%;">
            <v-row no-gutters>
              <p class="mb-2">
                {{ content.description }}
              </p>
            </v-row>
          </div>
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
              {{ likes }} likes
            </span>
          </v-row>
          <v-row no-gutters>
            <p
              class="xs-font"
              style="opacity: 0.6;">
              {{ time }}
            </p>
          </v-row>
        </v-col>
        <v-col cols="12">
          <app-comment
            v-for="item in content.comments"
            :key="item.id"
            :comment="item" />
          <hr>
          <br>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="comment"
            dense
            solo
            flat
            hide-details
            placeholder="Add a comment" />
          <v-btn
            class="mt-4"
            @click="post"
            color="primary"
            :disabled="!comment || comment.trim().length < 1"
            depressed>
            Send
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as timeago from 'timeago.js';
import account from '@/assets/account-placeholder.png';
import Comment from './Comment.vue';

export default {
  name: 'PostSidebar',
  props: {
    content: {
      type: Object,
      required: true,
    },
    profile: {
      type: String,
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
      console.log(this.content);
      this.comment = null;
    },
  },
  components: {
    appComment: Comment,
  },
};
</script>
