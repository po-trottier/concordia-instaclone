<template>
  <v-container>
    <v-row
      no-gutters
      class="narrow mt-9 mb-6">
      <v-col
        class="ml-10 my-auto"
        cols="12"
        md="6"
        lg="4">
        <v-avatar
          size="150"
          class="mx-12">
          <v-img
            src="@/assets/account-placeholder.png" />
        </v-avatar>
      </v-col>
      <v-col>
        <v-col>
          <v-row>
            <span class="lg-font">
              radleycaprio
            </span>
            <v-btn
              small
              depressed
              color="light darken-1"
              class="ml-5 my-auto"
              :to="{ name: 'edit' }">
              <span class="editprofile">
                Edit Profile
              </span>
            </v-btn>
          </v-row>
          <v-row class="my-4">
            <span class="sm-font mr-8">
              <span class="md-font">16</span> posts
            </span>
            <span class="sm-font mr-8">
              <span class="md-font">341</span> followers
            </span>
            <span class="sm-font mr-8">
              <span class="md-font">354</span> following
            </span>
          </v-row>
          <v-row class="md-font">
            Radley Carpio
          </v-row>
          <v-row class="sm-font mb-2">
            <a
              target="_blank"
              href="https://google.ca">
              This is my website.
            </a>
          </v-row>
          <v-row class="sm-font">
            This is my bio.
          </v-row>
        </v-col>
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
