<template>
  <router-link
    :to="{ name: 'feed' }"
    class="py-1 align-center d-flex">
    <v-img
      contain
      width="24"
      alt="Instagram Icon"
      src="@/assets/logo.png"
      class="shrink mx-3 mx-sm-0" />
    <v-divider
      vertical
      class="mx-3 hide-mobile" />
    <v-img
      contain
      width="100"
      alt="Instaclone Logo"
      src="@/assets/text-logo.svg"
      class="shrink hide-mobile" />
  </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo',
};
</script>
