<template>
  <v-row
    justify="center"
    justify-sm="start">
    <span class="lg-font">
      radleycaprio
    </span>
    <v-btn
      small
      depressed
      color="light darken-1"
      class="ml-5 my-auto hide-mobile"
      :to="{ name: 'edit' }">
      <span>
        Edit Profile
      </span>
    </v-btn>
    <v-btn
      icon
      color="light darken-3"
      class="ml-2 my-auto show-mobile"
      :to="{ name: 'edit' }">
      <v-icon>
        mdi-settings
      </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default ({
  name: 'ProfileInfoUsername',
});
</script>
