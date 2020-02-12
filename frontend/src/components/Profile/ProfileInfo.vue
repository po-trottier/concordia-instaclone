<template>
  <v-container>
    <v-row class="narrow mt-9 mb-9">
      <v-col
        class="ml-3 mr-n3"
        cols="12"
        md="6"
        lg="4">
        <v-avatar
          size="150"
          class="ml-12">
          <v-img
            src="@/assets/account-placeholder.png" />
        </v-avatar>
      </v-col>
      <v-col>
        <v-col class="mt-n2">
          <v-row>
            <span class="lg-font">
              radleycaprio
            </span>
            <v-btn
              small
              depressed
              outlined
              :to="{ name: 'edit' }"
              class="ml-5 mt-1">
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
import '@/styles/IG-styling.css';

export default ({
  name: 'ProfileInfo',
});
</script>
