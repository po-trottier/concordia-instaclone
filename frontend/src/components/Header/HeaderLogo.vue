<template>
  <router-link
    :to="{ name: 'feed' }"
    class="py-1 d-flex align-center">
    <v-img
      contain
      width="24"
      alt="Instagram Icon"
      src="@/assets/logo.png"
      class="shrink" />
    <v-divider
      vertical
      class="mx-3" />
    <v-img
      contain
      width="100"
      alt="Instaclone Logo"
      src="@/assets/text-logo.svg"
      class="shrink" />
  </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo',
};
</script>
