<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
      class="narrow my-10">
      <v-col
        class="my-auto text-center mb-8 mb-sm-auto"
        cols="12"
        sm="4">
        <v-avatar size="150">
          <v-img
            src="@/assets/account-placeholder.png" />
        </v-avatar>
      </v-col>
      <v-col
        class="pl-0 pl-sm-6 pl-md-0"
        cols="12"
        sm="8">
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
        <v-row
          class="my-4"
          justify="center"
          justify-sm="start">
          <span class="sm-font mr-8">
            <span class="md-font">16</span> posts
          </span>
          <span class="sm-font mr-8">
            <span class="md-font">341</span> followers
          </span>
          <span class="sm-font">
            <span class="md-font">354</span> following
          </span>
        </v-row>
        <v-row
          class="md-font"
          justify="center"
          justify-sm="start">
          Radley Carpio
        </v-row>
        <v-row
          class="sm-font mb-2"
          justify="center"
          justify-sm="start">
          <a
            target="_blank"
            href="https://google.ca">
            This is my website.
          </a>
        </v-row>
        <v-row
          class="sm-font"
          justify="center"
          justify-sm="start">
          This is my bio.
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="narrow" />
  </v-container>
</template>

<script>
export default ({
  name: 'ProfileInfo',
});
</script>
