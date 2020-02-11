<template>
  <v-container>
    <v-row class="narrow mt-9 mb-9">
      <v-col
        cols="12"
        xs="4"
        sm="4"
        md="4"
        lg="4"
        xl="4">
        <div
          align="center"
          class="mr-3 mt-1">
          <v-avatar
            size="150"
            class="avatar">
            <v-img
              src="@/assets/account-placeholder.png" />
          </v-avatar>
        </div>
      </v-col>
      <v-col>
        <v-col class="mt-n2">
          <v-row>
            <span class="lg_font">
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
            <span class="sm_font mr-8">
              <span class="md_font">16</span> posts
            </span>
            <span class="sm_font mr-8">
              <span class="md_font">341</span> followers
            </span>
            <span class="sm_font mr-8">
              <span class="md_font">354</span> following
            </span>
          </v-row>
          <v-row class="md_font">
            Radley Carpio
          </v-row>
          <v-row class="sm_font">
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
  name: 'ProfilEInfo',
});
</script>
