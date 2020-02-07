<template>
  <div>
    <v-avatar
      size="32"
      class="mr-2">
      <v-img :src="profile" />
    </v-avatar>
    <span>
      {{ username }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    profile: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
};
</script>
