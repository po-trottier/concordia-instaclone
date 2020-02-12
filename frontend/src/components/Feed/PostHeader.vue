<template>
  <div>
    <router-link :to="{ name: 'profile', params: { uid: user } }">
      <v-avatar
        size="32"
        class="mr-2">
        <v-img :src="profile" />
      </v-avatar>
      <span
        class="font-weight-regular"
        style="font-size: 1rem">
        {{ username }}
      </span>
    </router-link>
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
    user: {
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
