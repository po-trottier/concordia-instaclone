<template>
  <div>
    <v-row
      no-gutters
      class="mb-2">
      <v-btn
        icon
        class="mr-1">
        <v-icon>
          mdi-heart-outline
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>
          mdi-comment-outline
        </v-icon>
      </v-btn>
    </v-row>
    <v-row no-gutters>
      <p class="ml-3">
        {{ likes.toFixed(0) }} likes
      </p>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PostActions',

  props: {
    likes: {
      type: Number,
      required: true,
    },
  },
};
</script>
